import type { ANSIMaterialCategoryAndCodeType } from "../types/ANSI.MaterialCategoryAndCodeType";

export const ANSIMaterialCategoryAndCode = <ANSIMaterialCategoryAndCodeType>{
  10: {
    description: "Plastic",
    codes: {
      PET: {
        description: "Polyethylene terephthalate",
        examples: "Polyester fibers, soft drink bottles",
      },
      "HD-PE": {
        description: "High-density polyethylene",
        examples:
          "Plastic bottles, plastic bags, trash HDPE cans, imitation wood",
      },
      "LD-PE": {
        description: "Low-density polyethylene",
        examples:
          "Plastic bags, buckets, soap dispenser bottles, plastic tubes",
      },
    },
  },
  20: {
    description: "Paper and cardboard",
    codes: {
      CPAP: {
        description: "Cardboard",
        examples: "Transport packaging, moving boxes",
      },
      PAP: {
        description: "Paper",
        examples: "Mixed paper magazines, mail, newspapers",
      },
      PBD: {
        description: "Paperboard",
        examples: "Greeting cards, food boxes, shoe boxes",
      },
    },
  },
  40: {
    description: "Metal",
    codes: {
      FE: {
        description: "Steel",
        examples: "",
      },
      ALU: {
        description: "Aluminium",
        examples: "",
      },
    },
  },
  50: {
    description: "Wood",
    codes: {
      FOR: {
        description: "Wood",
        examples: "",
      },
      NTR: {
        description: "Impregnated Wood",
        examples: "",
      },
    },
  },
  60: {
    description: "Textile",
    codes: {
      TEX: {
        description: "Textile",
        examples: "",
      },
    },
  },
  70: {
    description: "Glass",
    codes: {
      GL1: {
        description: "Clear Sort Glass",
        examples: "",
      },
      CSGL: {
        description: "Clear Sort Glass",
        examples: "",
      },
      GL2: {
        description: "Dark Sort Glass",
        examples: "",
      },
      DSGL: {
        description: "Dark Sort Glass",
        examples: "",
      },
    },
  },
  80: {
    description: "Composite of packaging materials",
    codes: {
      PAPALU: {
        description: "Cardboard + Aluminium",
        examples:
          "Liquid storage containers, juice boxes, cardboard cans, Cigarette pack liners, gum wrappers, cartage shells for blanks, fireworks coloring material",
      },
    },
    PAPPET: {
      description: "Cardboard + Plastic",
      examples:
        "Consumer packaging, pet food bags, cold store grocery bags, ice cream containers, cardboard cans, disposable plates",
    },
  },
  "00": {
    description: "Other",
    codes: {
      "": {
        description: "",
        examples: "",
      },
    },
  },
};
