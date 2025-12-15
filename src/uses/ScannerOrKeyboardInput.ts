let scanned: string = "";
let converted: string = "";
let timeout: ReturnType<typeof setTimeout>;
let altUsed = false as boolean;

export async function ScannerOrKeyboardInput(ev: KeyboardEvent): Promise<string> {
  clearTimeout(timeout);
  converted = "";
  if (!ignoreCode.includes(ev.code) && !ignoreCode.includes(ev.key)) {
    scanned += ev.key;
    if (ev.altKey) {
      altUsed = true;
    }
  }
  return new Promise((resolve) => {
    timeout = setTimeout(() => {
      if (
        // Desktop USB scanner i.e. Zebra DS2208
        altUsed &&
        scanned.length > 4 &&
        /^[0-9]+$/.test(scanned) &&
        scanned.length % 4 == 0
      ) {
        converted = scanned
          .split(/(0\d{3})/)
          .filter((c) => c !== "")
          .map((v) => {
            return String.fromCharCode(parseInt(v));
          })
          .join("");
        scanned = "";
        altUsed = false;
        return resolve(converted);
      } else if (
        // Mobile scanner i.e. Zebra MC3400
        !altUsed &&
        scanned.length > 2 &&
        /^[0-9A-F]+$/.test(scanned) &&
        scanned.length % 2 == 0
      ) {
        converted = scanned
          .split(/([0-9A-F]{2})/)
          .filter((c) => c !== "")
          .map((v) => {
            return String.fromCharCode(parseInt(v, 16));
          })
          .join("");
        scanned = "";
        altUsed = false;
        return resolve(converted);
      } else {
        scanned = "";
        altUsed = false;
      }
    }, 30);
  });
}

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
  "CapsLock",
  "NumLock",
  "Pause",
  "Enter",
  "Tab",
  "Clear",
  "Backspace",
  "Escape",
];
