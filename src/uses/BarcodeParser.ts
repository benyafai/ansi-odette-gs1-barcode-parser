import { type AIList, type AIType } from "../types/ApplicationIdentifierType";

export const BarcodeParser = (
  barcode: string,
  ApplicationIdentifiers: AIList
) => {
  // let odettePresent = new RegExp(/^\[\)>\x1e06\x1d.*\x1e\x04$/).test(barcode);
  // let gs1Present = new RegExp(/^\]d2.*/).test(barcode);
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
            result[ai] = <AIType>{};
            result[ai].identifier = ai;
            result[ai].title = ApplicationIdentifiers[Identifier].title;
            result[ai].desc = ApplicationIdentifiers[Identifier].desc;
            result[ai].format = ApplicationIdentifiers[Identifier].format;
            result[ai].value = reg[2];
            // Overrides: Do we need to override our value type?
            if (IdentifierType.overrideType == "number") {
              result[ai].value = parseFloat(reg[2]);
            }
            if (IdentifierType.overrideType == "currency") {
              result[ai].value = parseFloat(reg[2]).toFixed(2);
            }
          }
        }
      }
    );
  });
  return result;
};
