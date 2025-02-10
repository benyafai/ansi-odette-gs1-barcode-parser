import { type AIList } from "../types/ApplicationIdentifierType";

export const GS1 = <AIList>{
  "00": {
    identifier: "00",
    format: "",
    title: "SSCC",
    reg: /^(00)(\d{18})/,
    desc: "Serial Shipping Container Code (SSCC)",
  },

  // TODO // Literally every other application identifier
};
