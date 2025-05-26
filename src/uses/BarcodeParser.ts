import { type AIList, type AIType } from "../types/ApplicationIdentifierType";
import { ANSIDateQualifier } from "./ANSI.DateQualifier";
import { ANSIUnitOfMeasure } from "./ANSI.UnitOfMeasure";
import { ANSIHazardQualifier } from "./ANSI.HazardQualifier";
import {
  ISO3166CountryCodeNumeric,
  ISO3166CountryCodeAlpha3,
  ISO3166CountryCodeAlpha2,
} from "./ISO.3166";

export const BarcodeParser = (
  barcode: string,
  ApplicationIdentifiers: AIList,
) => {
  let barcodeData = barcode
    .replace(/^\[\)>\x1e06\x1d/, "") // Strip Odette Header
    .replace(/\x1e\x04$/, "") // Strip Odette Trailer
    .replace(/^\]d2/, "") // Strip GS1 Header
    .split("\x1d"); // Split records
  const result = <AIList>{};
  barcodeData.forEach((bCode) => {
    Object.entries(ApplicationIdentifiers).forEach(
      ([Identifier, IdentifierType]) => {
        let regex = new RegExp(IdentifierType.reg as string);
        if (regex.test(bCode)) {
          let reg = regex.exec(bCode);
          if (reg && 2 in reg) {
            let ai = reg[1];
            let value = reg[2];
            result[ai] = <AIType>{};
            result[ai].identifier = ai;
            result[ai].title = ApplicationIdentifiers[Identifier].title;
            result[ai].desc = ApplicationIdentifiers[Identifier].desc;
            result[ai].format = ApplicationIdentifiers[Identifier].format;
            result[ai].value = value;
            // Overrides: Do we need to override our value type?
            if (IdentifierType.overrideType == "number") {
              result[ai].value = parseFloat(value);
            }
            if (IdentifierType.overrideType == "currency") {
              result[ai].value = parseFloat(value).toFixed(2);
            }
            if (IdentifierType.overrideType == "ANSIDateQualifier") {
              let rawDate = value.slice(0, -3);
              let timestamp = Date.UTC(
                parseInt(
                  rawDate.length == 8
                    ? rawDate.slice(0, 4)
                    : new Date().getFullYear().toString().slice(0, 2) +
                        rawDate.slice(0, 2),
                ),
                parseInt(
                  rawDate.length == 8
                    ? rawDate.slice(4, 6)
                    : rawDate.slice(2, 4),
                ) - 1,
                parseInt(
                  rawDate.length == 8
                    ? rawDate.slice(6, 8)
                    : rawDate.slice(4, 6),
                ),
              );
              // console.log(Date.UTC(89, 0, 25));
              result[ai].processed =
                new Date(timestamp).toLocaleDateString() +
                " " +
                ANSIDateQualifier[value.slice(-3)];
            }
            if (IdentifierType.overrideType == "ANSIHazardQualifier") {
              result[ai].processed = ANSIHazardQualifier[value.slice(0, 1)];
            }
            if (IdentifierType.overrideType == "ANSIUnitOfMeasure") {
              result[ai].processed =
                value.slice(0, -2) + " " + ANSIUnitOfMeasure[value.slice(-2)];
            }
            if (IdentifierType.overrideType == "ISO3166CountryCode") {
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
      },
    );
  });
  return result;
};
