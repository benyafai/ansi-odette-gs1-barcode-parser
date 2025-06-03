import type { ANSIHierarchicalLevelCodeType } from "../types/ANSI.HierarchicalLevelCodeType";

export const ANSILooping = <ANSIHierarchicalLevelCodeType>{
  S: {
    level: "Shipment",
    description:
      "Data that applies to the whole shipment, such as bill of lading number, lading quantity, supplier code, etc.",
  },
  O: {
    level: "Order",
    description:
      "Data related to the sender's order and the associated receiver's original purchase order.",
  },
  T: {
    level: "Tare",
    description:
      "The tare level is used to identify pallets. If there are no identifiable pallets, this level may be omitted",
  },
  P: {
    level: "Pack",
    description:
      "The pack level is used to identify the cartons within which the item is shipped, e.g., label serial numbers. In most cases there will be some sort of packs.",
  },
  Q: {
    level: "Sub-pack",
    description:
      "Data related to a grouping of identifiable packages within the pack level.\nNote that this level is only used when the inner pack has identifiable numbers for each inner pack.",
  },
  I: {
    level: "Item",
    description: "Stock keeping unit (SKU) identification data.",
  },
  F: {
    level: "Component",
    description: "Data related to the manufacturer’s component.",
  },
  X: {
    level: "Serial #",
    description: "Data related to the manufacturer’s serial number.",
  },
};
