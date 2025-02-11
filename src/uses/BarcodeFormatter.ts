export const BarcodeFormatter = (barcode: string) => {
  return (
    "<span>" +
    barcode
      .replace(
        /\x1d/g,
        '</span><span style="color: green;"><sup>G</sup><sub>S</sub></span><span>'
      )
      .replace(
        /\x1e/g,
        '</span><span style="color: blue;"><sup>R</sup><sub>S</sub></span><span>'
      )
      .replace(
        /\x04/g,
        '</span><span style="color: red;"><sup>E</sup>o<sub>T</sub></span><span>'
      ) +
    "</span>"
  );
};
