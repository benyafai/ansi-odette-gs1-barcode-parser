let scannedString = [] as string[];
let altString = [] as string[];

const ignoreCode = [
  "Shift",
  "ShiftLeft",
  "ShiftRight",
  "Alt",
  "AltLeft",
  "AltRight",
  "Control",
  "ControlLeft",
  "ControlRight",
  "Meta",
  "MetaLeft",
  "MetaRight",
  "Clear",
  "Pause",
  "Enter",
  "Tab",
  "CapsLock",
  "NumLock",
  "Clear",
  "Backspace",
  "Escape",
];

const parseAltCode = (altString: string) => {
  let codes = [];
  let result = "";

  if (altString.length % 4 == 0) {
    let match = altString.match(/\d{4}/g);
    if (match) {
      codes.push(match);
    }
  } else if (altString.length % 3 == 0) {
    let match = altString.match(/\d{4}/g);
    if (match) {
      codes.push(match);
    }
  } else if (altString.length % 2 == 0) {
    let match = altString.match(/\d{2}/g);
    if (match) {
      codes.push(match);
    }
  }
  if (codes) {
    codes.forEach((code) => {
      code.forEach((c) => {
        let parsed = String.fromCharCode(parseInt(c));
        result += parsed;
      });
    });
  }
  return result;
};

export const ScannerOrKeyboardInput = (ev: KeyboardEvent) => {
  if (!ev.altKey && altString) {
    scannedString.push(parseAltCode(altString.join("")));
    altString = [];
  }
  // Return our response when requested
  if (ev.code == "Enter") {
    let response = scannedString.join("").toUpperCase();

    // If our input has been purely decimals (multiple groups of 4 digits) then convert it to ASCII
    // i.e. Zebra DS2208, a desktop USB scanner
    if (
      response.length > 4 &&
      /^[0-9]+$/.test(response) &&
      response.length % 4 == 0
    ) {
      response = response
        .split(/(0\d{3})/)
        .filter((c) => c !== "")
        .map((v) => {
          return String.fromCharCode(parseInt(v, 16));
        })
        .join("");
    }
    // If our input has been purely hexadecimal (multiple groups of 2 characters) then convert it to ASCII
    // i.e. Zebra MC3400, a mobile scanner
    if (
      response.length > 2 &&
      /^[0-9A-F]+$/.test(response) &&
      response.length % 2 == 0
    ) {
      response = response
        .split(/([0-9A-F]{2})/)
        .filter((c) => c !== "")
        .map((v) => {
          return String.fromCharCode(parseInt(v, 16));
        })
        .join("");
    }
    // Reset the input before returning the response.
    scannedString = [];
    return response;
  }
  // Process special keys
  if (!ignoreCode.includes(ev.code) && !ignoreCode.includes(ev.key)) {
    if (ev.altKey) {
      altString.push(ev.key);
    } else {
      scannedString.push(ev.key);
    }
  }
  return scannedString.join("").toUpperCase();
};
