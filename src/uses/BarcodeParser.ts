import { type AIList, type AIType } from "../types/ApplicationIdentifierType";
import { ANSIDateQualifier } from "./ANSI.DateQualifier";
import { ANSIUnitOfMeasure } from "./ANSI.UnitOfMeasure";
import { ANSIHazardQualifier } from "./ANSI.HazardQualifier";
import { ANSIMaterialCategoryAndCode } from "./ANSI.MaterialCategoryAndCode";
import {
  ISO3166CountryCodeNumeric,
  ISO3166CountryCodeAlpha3,
  ISO3166CountryCodeAlpha2,
} from "./ISO.3166";

let parseList = [] as string[];

async function BarcodeSplitter(
  barcode: string,
  ApplicationIdentifiers: AIList
) {
  Object.entries(ApplicationIdentifiers).forEach(async ([Identifier]) => {
    let regex = new RegExp(ApplicationIdentifiers[Identifier].reg as string);
    if (regex.test(barcode)) {
      let reg = regex.exec(barcode);
      if (reg && 2 in reg) {
        // We have found a match, push it to our array.
        parseList.push(reg[0]);
        if (reg[0].length < barcode.length) {
          // There is still more to go, recurse!
          await BarcodeSplitter(
            barcode.slice(reg[0].length),
            ApplicationIdentifiers
          );
        }
      }
    }
  });
}

export const BarcodeParser = async (
  barcode: string,
  ApplicationIdentifiers: AIList
) => {
  // Reset
  parseList = [];
  // Strip Headers and Trailers. Split string.
  let barcodeData = barcode
    .replace(/^\[\)>\x1e06\x1d/, "") // Strip Odette Header
    .replace(/\x1e\x04$/, "") // Strip Odette Trailer
    .replace(/^\]d2/, "") // Strip GS1 Header
    .split("\x1d"); // Split by GS character.

  // We don't always have a GS character, so recurse over
  // strings to see if any fixed length matches are found.
  barcodeData.forEach(async (bCode) => {
    await BarcodeSplitter(bCode, ApplicationIdentifiers);
  });
  // Now we have our strings, parse the data for Application Identifiers
  const result = <AIList>{};
  parseList.forEach((bCode) => {
    Object.entries(ApplicationIdentifiers).forEach(([AI]) => {
      let regex = new RegExp(ApplicationIdentifiers[AI].reg as string);
      if (regex.test(bCode)) {
        let reg = regex.exec(bCode);
        if (reg && 2 in reg) {
          let ai = reg[1];
          let value = reg[2];
          result[ai] = <AIType>{};
          result[ai].identifier = ai;
          result[ai].title = ApplicationIdentifiers[AI].title;
          result[ai].desc = ApplicationIdentifiers[AI].desc;
          result[ai].format = ApplicationIdentifiers[AI].format;
          result[ai].value = value;
          // Overrides: Do we need to override our value type?
          if (ApplicationIdentifiers[AI].overrideType == "number") {
            result[ai].value = parseFloat(value);
          }
          if (ApplicationIdentifiers[AI].overrideType == "currency") {
            result[ai].value = parseFloat(value).toFixed(2);
          }
          if (ApplicationIdentifiers[AI].overrideType == "ANSIDateQualifier") {
            let rawDate = value.slice(0, -3);
            let timestamp = Date.UTC(
              parseInt(
                rawDate.length == 8
                  ? rawDate.slice(0, 4)
                  : new Date().getFullYear().toString().slice(0, 2) +
                      rawDate.slice(0, 2)
              ),
              parseInt(
                rawDate.length == 8 ? rawDate.slice(4, 6) : rawDate.slice(2, 4)
              ) - 1,
              parseInt(
                rawDate.length == 8 ? rawDate.slice(6, 8) : rawDate.slice(4, 6)
              )
            );
            result[ai].processed =
              new Date(timestamp).toLocaleDateString() +
              " " +
              ANSIDateQualifier[value.slice(-3)];
          }
          if (
            ApplicationIdentifiers[AI].overrideType == "ANSIHazardQualifier"
          ) {
            result[ai].processed = ANSIHazardQualifier[value.slice(0, 1)];
          }
          if (ApplicationIdentifiers[AI].overrideType == "ANSIUnitOfMeasure") {
            result[ai].processed =
              value.slice(0, -2) + " " + ANSIUnitOfMeasure[value.slice(-2)];
          }
          if (
            ApplicationIdentifiers[AI].overrideType ==
            "ANSIMaterialCategoryAndCode"
          ) {
            let packData = /^(\d{2})(\w{1,6})([0-9\.]{5})(\w{2})$/.exec(value);
            if (packData && 1 in reg) {
              console.log(packData);
              let matCategory =
                ANSIMaterialCategoryAndCode[packData[1]].description;
              let matCode =
                ANSIMaterialCategoryAndCode[packData[1]].codes[packData[2]]
                  .description;
              let UnitOfMeasure = ANSIUnitOfMeasure[packData[4]];
              result[ai].processed =
                matCategory +
                ": " +
                matCode +
                ": " +
                packData[3] +
                " " +
                UnitOfMeasure;
            }

            // result[ai].processed =
            //   value.slice(0, -2) + " " + ANSIUnitOfMeasure[value.slice(-2)];
          }
          if (ApplicationIdentifiers[AI].overrideType == "ISO3166CountryCode") {
            if (!isNaN(parseInt(value)) && value.length == 3) {
              result[ai].processed = ISO3166CountryCodeNumeric[value];
            } else if (value.length == 3) {
              result[ai].processed = ISO3166CountryCodeAlpha3[value];
            } else if (value.length == 2) {
              result[ai].processed = ISO3166CountryCodeAlpha2[value];
            }
          }
        }
      }
    });
  });
  return result;
};
