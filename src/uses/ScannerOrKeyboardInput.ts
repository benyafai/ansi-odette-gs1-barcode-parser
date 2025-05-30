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
