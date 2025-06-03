export const BarcodeFormatter = (barcode: string) => {
  if (barcode.startsWith("http")) {
    return 'GS1 Digital Link: <a href="' + barcode + '">' + barcode + "</a>";
  } else {
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
  }
};
