export const BarcodeFormatter = (barcode: string) => {
  return barcode
    .replace(
      /\x1d/g,
      '<span style="color: green;"><sup>G</sup><sub>S</sub></span>'
    )
    .replace(
      /\x1e/g,
      '<span style="color: blue;"><sup>R</sup><sub>S</sub></span>'
    )
    .replace(
      /\x04/g,
      '<span style="color: red;"><sup>E</sup>o<sub>T</sub></span>'
    );
};
