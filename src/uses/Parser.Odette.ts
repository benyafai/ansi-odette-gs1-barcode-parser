import { type AIList } from "../types/ApplicationIdentifierType";

export const Odette = <AIList>{
  // Category 1 (A): Reserved
  // A-999A: Reserved

  // Category 2 (B): Container Information
  B: {
    identifier: "B",
    format: "",
    title: "Container Type",
    reg: /^(B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Internally assigned or mutually defined",
  },
  "1B": {
    identifier: "1B",
    format: "",
    title: "Returnable Container Identification Code",
    reg: /^(1B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the container owner or the appropriate regulatory agency (e.g., a metal tub, basket, reel, unit load device (ULD), trailer, tank, or intermodal container) (excludes gas cylinders See '2B').",
  },
  "2B": {
    identifier: "2B",
    format: "",
    title: "Gas Cylinder Container Identification Code",
    reg: /^(2B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the manufacturer in conformance with U.S. Department of Transportation (D.O.T.) standards.",
  },
  "3B": {
    identifier: "3B",
    format: "",
    title: "Motor Freight Transport Equipment Identification Code",
    reg: /^(3B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the manufacturer in conformance with International Organization for Standardization (ISO) standards.",
  },
  "4B": {
    identifier: "4B",
    format: "an2+an4+an..10",
    title: "Standard Carrier Alpha Code (SCAC) ",
    reg: /^(4B)([\x30-\x39\x41-\x5A\x61-\x7A]{1,90})/,
    desc: "4 alphanumeric characters and an optional carrier assigned trailer number (one to ten alphanumeric characters). When used, the carrier assigned trailer number is separated from the SCAC by a dash “-“.",
  },
  "5B": {
    identifier: "5B",
    format: "an2+an..35",
    title: "Receptacle Asset Number",
    reg: /^(5B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35})/,
    desc: "Consisting of two joined parts:\n⎯ Identification of an organization in accordance with ISO/IEC 15459 and a unique entity identification assigned in accordance with rules established by the issuing agency.\n⎯ A unique serial number assigned by the entity, ending with a 3-character container type code taken from EDIFACT Code List 8053 or UPU standard M82-3. (If the container type code listed is less than three characters in length, the field will be dash “-“ filled left to the length of three characters).",
  },
  // 6B: Reserved
  "7B": {
    identifier: "7B",
    format: "an2+an11",
    title: "Container Serial Number",
    reg: /^(7B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{11})/,
    desc: "According to ISO 6346. OC EI CSN CD, where the OC is the three letter owner code assigned in cooperation with BIC, the EI is the one letter equipment category identifier, the CSN is a 6-digit unique container identification assigned by the equipment owner, and CD is a modulus 11 check digit calculated in accordance with Annex A, ISO 6346.",
  },
  "8B": {
    identifier: "8B",
    format: "an2+an3",
    title: "Returnable Container Owner",
    reg: /^(8B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{3})/,
    desc: "Identification of a Returnable Container owner assigned in cooperation with BIC",
  },
  "9B": {
    identifier: "9B",
    format: "an2+an4",
    title: "Container Size/Type Code",
    reg: /^(9B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{4})/,
    desc: "According to ISO 6346, §4.2.",
  },
  "10B": {
    identifier: "10B",
    format: "an3+an4",
    title: "Container Ownership Code",
    reg: /^(10B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{4})/,
    desc: "Actual four-character abbreviation marked on the container by the owner. For DOD owned containers see Defense Transportation Regulation App EE-6.",
  },
  // TODO // 11B-55B
  // 56B-999B: Reserved for future assignment

  // Category 3: Field Continuation
  C: {
    identifier: "C",
    format: "",
    title: "Continuation of an Item Code",
    reg: /^(C)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Continuation of an Item Code (Category 16) assigned by Customer that is too long for a required field size.",
  },
  "1C": {
    identifier: "1C",
    format: "",
    title: "Continuation of Traceability Code",
    reg: /^(1C)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Continuation of Traceability Code (Category 20) assigned by Supplier.",
  },
  "2C": {
    identifier: "2C",
    format: "",
    title: "Continuation of Serial Number",
    reg: /^(2C)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Continuation of Serial Number (Category 19) assigned by Supplier.",
  },
  "3C": {
    identifier: "3C",
    format: "",
    title: "Continuation of Free Text",
    reg: /^(3C)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Continuation of Free Text (Category 26) mutually defined between Supplier/Carrier/Customer.",
  },
  "4C": {
    identifier: "4C",
    format: "",
    title: "Continuation of Transaction Reference",
    reg: /^(4C)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Continuation of Transaction Reference (Category 11) mutually defined between Supplier/Carrier/Customer.",
  },
  "5C": {
    identifier: "5C",
    format: "",
    title: "Continuation of Item Code",
    reg: /^(5C)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Continuation of Item Code (Category 16) Assigned by Supplier.",
  },
  // 6C-999C: Reserved for future assignment

  // Category 4 (D): Date
  D: {
    identifier: "D",
    format: "a1+n6",
    title: "Date",
    reg: /^(D)([\x30-\x39]{6})/,
    desc: "Format YYMMDD.",
  },
  "1D": {
    identifier: "1D",
    format: "an2+n6",
    title: "Date",
    reg: /^(1D)([\x30-\x39]{6})/,
    desc: "Format DDMMYY.",
  },
  "2D": {
    identifier: "2D",
    format: "an2+n6",
    title: "Date",
    reg: /^(2D)([\x30-\x39]{6})/,
    desc: "Format MMDDYY.",
  },
  "3D": {
    identifier: "3D",
    format: "an2+n4",
    title: "Date",
    reg: /^(3D)([\x30-\x39]{4})/,
    desc: "Format YDDD (Julian).",
  },
  "4D": {
    identifier: "4D",
    format: "an2+n5",
    title: "Date",
    reg: /^(4D)([\x30-\x39]{5})/,
    desc: "Format YYDDD (Julian).",
  },
  "5D": {
    identifier: "5D",
    format: "an2+n6+an3",
    title: "Date",
    reg: /^(5D)([\x30-\x39]{6}[\x30-\x39\x41-\x5A\x61-\x7A]{3})/,
    desc: "ISO format YYMMDD, immediately followed by an ANSI X12.3 Data Element Number 374 Qualifier providing a code specifying type of date (e.g., ship date, manufacture date).",
  },
  "6D": {
    identifier: "6D",
    format: "an2+n8+an3",
    title: "Date",
    reg: /^(6D)([\x30-\x39]{8}[\x30-\x39\x41-\x5A\x61-\x7A]{3})/,
    desc: "ISO format YYMMDD, immediately followed by an ANSI X12.3 Data Element Number 374 Qualifier providing a code specifying type of date (e.g., ship date, manufacture date).",
  },
  "7D": {
    identifier: "7D",
    format: "an2+n4",
    title: "Date",
    reg: /^(7D)([\x30-\x39]{5})/,
    desc: "Format MMYY.",
  },
  "8D": {
    identifier: "8D",
    format: "an2+n14..15",
    title: "Date",
    reg: /^(8D)([\x30-\x39]{14,15})/,
    desc: "Event, Date, And Time. ISO format YYYYMMDDHHMM (24 hour clock - UTC) immediately followed by a UN/EDIFACT Code Qualifier 2005 providing a code specifying type of date), e.g.\n11   [Date when goods are expected to be dispatched/shipped message is issued.]\n17   [Estimated delivery date/time when goods are expected to be delivered]\n35   [Date on which goods are delivered to their destination.]\n118  [Booking Confirmed]\n129  [Date when the vessel/merchandise departed the last foreign port in the exporting country.]\n132  [Date/time when the carrier estimates that a means of transport should arrive at the port of discharge or place of destination.]\n133  [Date/time when carrier estimates that a means of transport should depart at the place of departure]\n137  [Date/time when the supplier ships parts based on the customer's request. (Date when DESADV message is issued. Recommendation is the DESADV is issued within 30 minutes of goods being picked up at Ship-From party]\n146  [Estimated Entry date (Customs) date on which the official date of a Customs Entry is anticipated.]\n151  [Import Date (Arrived at port with intent to unlade]\n186  [Departs a Facility (“Gate-out)]\n204  [Date on which Customs releases merchandise to the carrier or importer]\n253  [Departs from a Port (“Vessel Departure”)]\n252  [Arrives at a Port (“Vessel Arrival”)]\n283  [Arrives at a Facility (“Gate-in)]\n342  [Conveyance Loaded]\n351  [Terminal Gate Inspection]\n411  [Ordered Stuffed]\n412  [Ordered Stripped]\n420  [Conveyance unloaded]\n534  [Repaired]\n677  [Confirmed Stuffed]\n678  [Confirmed Stripped]\n696  [Filing Date]",
  },
  "9D": {
    identifier: "9D",
    format: "",
    title: "Date",
    reg: /^(9D)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Structure and significance mutually defined.",
  },
  "10D": {
    identifier: "10D",
    format: "an3+n4",
    title: "Date",
    reg: /^(10D)([\x30-\x39]{4})/,
    desc: "Format YYWW.",
  },
  "11D": {
    identifier: "11D",
    format: "an3+n6",
    title: "Date",
    reg: /^(11D)([\x30-\x39]{6})/,
    desc: "Format YYYYWW.",
  },
  "12D": {
    identifier: "12D",
    format: "an3+n8",
    title: "Date",
    reg: /^(12D)([\x30-\x39]{8})/,
    desc: "Format YYYYMMDD.",
  },
  "13D": {
    identifier: "13D",
    format: "an3+n8",
    title: "Date",
    reg: /^(13D)([\x30-\x39]{8})/,
    desc: "Oldest and Newest Manufacturing Date in the format YYWWYYWW.",
  },
  "14D": {
    identifier: "14D",
    format: "an3+n8",
    title: "Expiration Date",
    reg: /^(14D)([\x30-\x39]{8})/,
    desc: "Format YYYYMMDD.",
  },
  "15D": {
    identifier: "15D",
    format: "an3+n8",
    title: "Expiration Date",
    reg: /^(15D)([\x30-\x39]{8})/,
    desc: "Format DDMMYYYY.",
  },
  "16D": {
    identifier: "16D",
    format: "an3+n8",
    title: "Production Date",
    reg: /^(16D)([\x30-\x39]{8})/,
    desc: "Format YYYYMMDD (Date of manufacture).",
  },
  "17D": {
    identifier: "17D",
    format: "an3+n8",
    title: "Date",
    reg: /^(17D)([\x30-\x39]{8})/,
    desc: "Format DDMMYYYY (Date of manufacture).",
  },
  "18D": {
    identifier: "18D",
    format: "an3+n12",
    title: "Tag Activation Time",
    reg: /^(18D)([\x30-\x39]{12})/,
    desc: "Format YYYYMMDDHHMM (24 hour clock - UTC).",
  },
  "19D": {
    identifier: "19D",
    format: "an3+n12",
    title: "Tag Deactivation Time",
    reg: /^(19D)([\x30-\x39]{12})/,
    desc: "Format YYYYMMDDHHMM (24 hour clock - UTC).",
  },
  "20D": {
    identifier: "20D",
    format: "an3+n8",
    title: "Inspection Date",
    reg: /^(20D)([\x30-\x39]{8})/,
    desc: "Format DDMMYYYY.",
  },
  "21D": {
    identifier: "21D",
    format: "",
    title: "Required Delivery Date",
    reg: /^(21D)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Format DDD Julian or DOD MILSTAMP Code.",
  },
  "22D": {
    identifier: "22D",
    format: "an3+n12",
    title: "Record Time",
    reg: /^(22D)([\x30-\x39]{12})/,
    desc: "Format YYYYMMDDHHMM (24 hour clock - UTC).",
  },
  "23D": {
    identifier: "23D",
    format: "",
    title: "Date",
    reg: /^(23D)([\x2E\x30-\x39]+)/,
    desc: "Date, represented in modified UTC compliant form: yyyy[mm[dd[hh[mm[ss[fff]]]]]][poooo] where square brackets indicate optionality and yyyy is the year, mmdd the month and day, hhmmss the time of day in hours minutes and seconds, fff the fractions of sections and poooo the offset from UTC expressed in hours and minutes, the offset being positive if p is a point (.), negative if P is a minus sign (-).\nEXAMPLE:\n2005                (UTC) calendar year 2005\n200505              (UTC) calendar month May 2005\n20050518            (UTC) 18 May 2005\n200505181247        12:47 UTC on 18 May 2005\n200505181247.0100   12:47 local time, being 11:47 UTC, on 18 May 2005\n20050518124723099   99 milliseconds after UTC 12:47:23 on 18 May 2005",
  },
  "24D": {
    identifier: "24D",
    format: "",
    title: "Qualified Date",
    reg: /^(24D)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Qualified Date, comprising the concatenation of:\n⎯ an ISO/IEC 15459 issuing agency code;\n⎯ a date qualifier conforming to the specifications of that issuing agency;\n⎯ a date whose format and interpretation comply with the specifications of the issuing agency for that date qualifier.",
  },
  "25D": {
    identifier: "25D",
    format: "an3+n8",
    title: "Best before date",
    reg: /^(25D)([\x30-\x39]{8})/,
    desc: "Format YYYYMMDD. Example: 25D20170202 = February 2, 2017",
  },
  "26D": {
    identifier: "26D",
    format: "an3+n8",
    title: "First freeze date",
    reg: /^(26D)([\x30-\x39]{8})/,
    desc: "Format YYYYMMDD. The first freeze date is defined as the date on which products are frozen directly after slaughtering, harvesting, catching or after initial processing. Example: 26D20170721 = July 21, 2017",
  },
  "27D": {
    identifier: "27D",
    format: "an3+n16",
    title: "Harvest date range",
    reg: /^(27D)([\x30-\x39]{16})/,
    desc: "Format YYYYMMDDYYYYMMDD. The start date and end date range over which harvesting occurred.\nFor example; animals were slaughtered or killed, fish were harvested, or a crop was harvested.\nThe data stream is defined as the first YYYYMMDD as the start date and the last YYYYMMDD as the end date.\nExample: 28D2017012320170214 = Start; January 23, 2017. End; February 14, 2017",
  },
  "28D": {
    identifier: "28D",
    format: "an3+n8",
    title: "Best before date",
    reg: /^(28D)([\x30-\x39]{8})/,
    desc: "Format YYYYMMDD. Example: 25D20170202 = February 2, 2017",
  },
  // 29D-999D: Reserved for future assignment

  // Category 5 (E): Environmental Factors
  E: {
    identifier: "E",
    format: "a1+a2",
    title: "Restricted Substances Classification",
    reg: /^(E)([\x41-\x5A\x61-\x7A]{2})/,
    desc: "“Environmental Classification Code” including Lead-Free (Pb-Free) finish categories defined in JESD97 (IPC JEDEC J-STD-609), and future industry or governmental agency assigned codes related to environmental regulatory compliance and hazardous material content.",
  },
  "1E": {
    identifier: "1E",
    format: "",
    title: "Air Pressure",
    reg: /^(1E)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Air Pressure – (altitude) expressed in Pascal’s as the standard international measure.",
  },
  "2E": {
    identifier: "2E",
    format: "an2+n1..4",
    title: "Maximum Allowed Temperature",
    reg: /^(2E)([\x2D]?[\x30-\x39]{1,4})/,
    desc: "Degrees Celsius, “-” (minus) encoded, if required.",
  },
  "3E": {
    identifier: "3E",
    format: "an2+n1..4",
    title: "Minimum Allowed Temperature",
    reg: /^(3E)([\x2D]?[\x30-\x39]{1,4})/,
    desc: "Degrees Celsius, “-” (minus) encoded, if required.",
  },
  "4E": {
    identifier: "4E",
    format: "an2+n1..2",
    title: "Maximum Allowed Relative Humidity",
    reg: /^(4E)([\x30-\x39]{1,2})/,
    desc: "Implied as percent.",
  },
  "5E": {
    identifier: "5E",
    format: "an2+n1..2",
    title: "Minimum Allowed Relative Humidity",
    reg: /^(5E)([\x30-\x39]{1,2})/,
    desc: "Expressed as percent.",
  },
  "6E": {
    identifier: "6E",
    format: "an2+n1..4",
    title: "Refrigerator Container Temperature",
    reg: /^(6E)([\x2D]?[\x30-\x39]{1,4})/,
    desc: "For temperature-controlled cargo, target specified by shipper, Degrees Celsius, “-” (minus) encoded, if required.",
  },
  // 7E-9E: Reserved
  "10E": {
    identifier: "10E",
    format: "",
    title: "Cumulative Time Temperature Index",
    reg: /^(10E)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Expressed as the number of measurements or counts.",
  },
  "11E": {
    identifier: "11E",
    format: "",
    title: "Time Temperature Index",
    reg: /^(11E)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Time Temperature Index – Next Higher Assembly – expressed as the number of measurements or counts.",
  },
  "12E": {
    identifier: "12E",
    format: "an3+an9..15",
    title: "Declaration of Packaging Material Category, Code and Weight",
    reg: /^(12E)([\x30-\x39]{2}[\x30-\x39\x41-\x5A\x61-\x7A]{1,6}[\x2E\x30-\x39]{5}[\x41-\x5A\x61-\x7A]{2})/,
    desc: "Declaration of Packaging Material Category*, Code* and Weight for a given packaging material used in a given packaging according to the EU packaging and packaging waste directive. (Material category and code defined in Annex M). 12ECCMMMMMMNNNNNUU where\n- “12E” (an3) is the Data Identifier,\n- “CC” (n2) is the Material Category per Annex M, - “MMMMMM” (an1...6) is the Material Code per Annex M,\n- “NNNNN” (n5) Material Weight, including decimal point (e.g., 12.12),\n- “UU” (an2) is the Unit of measure for weight (e.g., KG, GR, LB or OZ per ANSI X12.3 as in Annex D).",
  },
  "13E": {
    identifier: "13E",
    format: "",
    title: "MSL Indicator",
    reg: /^(13E)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "The data following DI 13E will be one of the MSL indicators (1, 2, 2a, 3, 4, 5, 5a, 6) as shown in the LEVEL column in Table 5-1 of JEDEC standard IPC/JEDEC J-STD-020E. The Table is shown below for reference only; the currently released version of the referenced standard shall be used to obtain the correct MSL for the actual component.\nExample: 13E2a",
  },
  // 14E-999E: Reserved for future assignment

  // Category 6 (F): Looping
  // TODO // Loop over the hierarchy!

  // Category 7 (G): Reserved
  // G-999G: Reserved

  // Category 8 (H): Human Resources
  H: {
    identifier: "H",
    format: "an1+an1..60",
    title: "Name of Party",
    reg: /^(H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,60})/,
    desc: "Name of a party followed by a plus (+) character followed by one or more code values from EDIFACT Code List 3035 “Party Qualifier”, e.g.,\nBY  [Buyer]\nCF  [Container operator]\nCN  [Consignee]\nCS  [Consolidator]\nDEI [Vessel operator/captain of vessel]\nFA  [Operational staff code]\nIM  [Importer]\nMF  [Manufacturer]\nOS  [Shipper]\nSE  [Seller]\nST  [Ship To]\nUC  [Ultimate consignee]",
  },
  "1H": {
    identifier: "1H",
    format: "",
    title: "Employee Identification Code",
    reg: /^(1H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by employer",
  },
  "2H": {
    identifier: "2H",
    format: "an2+n9",
    title: "U.S. Social Security Number.",
    reg: /^2H(\x30-\x39]{9})/,
    desc: "",
  },
  "3H": {
    identifier: "3H",
    format: "",
    title: "ID Number for Non-Employee",
    reg: /^(3H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Internally assigned or mutually defined (e.g., contract workers, vendors, service, and delivery personnel)",
  },
  "4H": {
    identifier: "4H",
    format: "",
    title: "National Social Security Number.",
    reg: /^(4H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "5H": {
    identifier: "5H",
    format: "",
    title: "Last Name",
    reg: /^(5H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "6H": {
    identifier: "6H",
    format: "an2+an1..35",
    title: "Party Name",
    reg: /^(6H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35})/,
    desc: "(Line 2).",
  },
  "7H": {
    identifier: "7H",
    format: "an2+n10..15",
    title: "Contact Phone",
    reg: /^(7H)([\x20\x30-\x39]{1,35})/,
    desc: "Country Code, Area Code, Exchange, number [XX YYY ZZZ ZZZZ].",
  },
  "8H": {
    identifier: "8H",
    format: "an2+an3..35",
    title: "Contact Email",
    reg: /^(8H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{3,35})/,
    desc: "",
  },
  "9H": {
    identifier: "9H",
    format: "an2+an10..12",
    title: "Consignee Number",
    reg: /^(9H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{10,12})/,
    desc: "The unique identifying number can be the IRS, EIN, SSN, or the CBP assigned number, as required on the Security Filing.\nOnly the following formats shall be used:\nIRS EIN:            NN-NNNNNNN\nIRS EIN w/ suffix:  NN-NNNNNNNXX\nSSN:                NNN-NN-NNNN\nCBP assigned nbr:   YYDDPP-NNNNN",
  },
  "10H": {
    identifier: "10H",
    format: "",
    title: "Personal Identification Code",
    reg: /^(10H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "First initial, Last initial, last four of SSN.",
  },
  "11H": {
    identifier: "11H",
    format: "",
    title: "First Name and Middle Initial",
    reg: /^(11H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "12H": {
    identifier: "12H",
    format: "an3+an2..3",
    title: "Military Grade",
    reg: /^(12H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{2,3})/,
    desc: "",
  },
  // 13H-14H: Reserved
  "15H": {
    identifier: "15H",
    format: "an3+an2+an1..an20",
    title: "National Identification Number",
    reg: /^(15H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{3,22})/,
    desc: "A National Identification Number, National Identity Number, or National Insurance Number used as a means of identifying individuals within a country for the purposes of work, taxation, government benefits, health care, and other governmentally-related functions.\nThis structure of the identifier is DI (15H) followed by the ISO 3166-1 Alpha2 Country Code followed by the predominant government assigned identification code for individuals.",
  },
  // 16H-24H: Reserved
  "25H": {
    identifier: "25H",
    format: "",
    title: "Globally Unique Personal ID",
    reg: /^(25H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by a holder of a Company Identification Code (CIN) and including the related Issuing Agency Code (IAC) in accordance with ISO/IEC 15459 and its registry, structured as sequence of 3 concatenated data elements: IAC followed by CIN, followed by the ID unique within the holder's domain.",
  },
  "26H": {
    identifier: "26H",
    format: "an3+an3..35+“+”+a1..3",
    title: "Globally Unique Personal ID",
    reg: /^(26H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{3,35}\+[\x41-\x5A\x61-\x7A]{1,3})/,
    desc: "Globally Unique Personal ID, with a “Party Qualifier” code value from EDIFACT Code List 3035, assigned by a holder of a Company Identification Code (CIN) and including the related Issuing Agency Code (IAC) in accordance with ISO/IEC 15459 and its registry, structured as a sequence of 5 concatenated data elements: IAC followed by CIN, followed by an ID unique within the CIN holder's domain, followed by the Plus character (+) and a code value from EDIFACT Code List 3035 “Party Qualifier”, e.g.:\nBG  Employer\nGP  Packer\nLK  Patient\nLL  Patient companion\nLM  Medical treatment executant\nMF  Manufacturer of goods\nExample: 26HLHHIBC987XY65+LK",
  },
  // 27H-999H: Reserved for future assignment

  // Category 9 (I): Reserved
  I: {
    identifier: "I",
    format: "",
    title: "Exclusive Assignment",
    reg: /^(I)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Vehicle Identification Number (VIN) as defined in the U.S. under 49 CFR, §§ 565 and internationally by ISO 3779. (These are completely compatible data structures).",
  },
  // 1I: Reserved
  "2I": {
    identifier: "2I",
    format: "",
    title: "Abbreviated VIN Code",
    reg: /^(2I)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  // 3I: Reserved – Prior assignment
  "4I": {
    identifier: "4I",
    format: "",
    title: "Globally unique transport vehicle identifier",
    reg: /^(4I)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(e.g., Trucks)\nConsisting of the Vehicle Identification Number (VIN) as defined in the U.S. under 49 CFR §§ 565, and internationally by ISO 3779, followed by the “+” character, then followed by the government-issued Vehicle Registration License Plate Number in the form of “4I” “VIN” “+” “government-issued Vehicle Registration License Plate Number” (quotes and spaces shown for clarity only; they are not part of the data).",
  },
  "5I": {
    identifier: "5I",
    format: "",
    title: "Unique production vehicle identifier",
    reg: /^(5I)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Will be used during the vehicle production processes, consisting of the Body Tag Number (BTN; or any other descriptor used to identify the raw car body, or stated another way, the assemblage of parts that are used to start the vehicle’s production), followed by the “+” character, then followed by the Production Order Number (PON), followed by the “+” character, and then followed by the Manufacturer-assigned Serial Number (SN).\nNOTE: The SN component shall be replaced by the VIN as soon as the VIN is available in the assembly process.\nThe construction will be as follows;\n“5I” “BTN” “+” “PON“ “+” “SN”\n    changing to (when VIN available)\n“5I” “BTN” “+” “PON“ “+” “VIN”\nNOTE: Quotes and spaces are shown for clarity only; they are not part of the data.\nNOTE: This DI is never to be concatenated with other DIs in a linear symbol or other media where the concatenation character is a plus (+) character.\nExamples:\nSN version:   5IABCD1234+CO1234+W0L201600500001\nVIN version:  5IABCD1234+CO1234+W0L0XAP68F4050901",
  },
  // 6I-999I: Reserved - Not recommended for use due to similarity of "1" to "I".

  // Category 10 (J): License Plate
  J: {
    identifier: "J",
    format: "an1+an1..35",
    title: "Unique license plate number",
    reg: /^(J)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35}})/,
    desc: "",
  },
  "1J": {
    identifier: "1J",
    format: "an2+an1..35",
    title: "Unique license plate number",
    reg: /^(1J)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35}})/,
    desc: "Assigned to a transport unit which is the lowest level of packaging, the unbreakable unit.",
  },
  "2J": {
    identifier: "2J",
    format: "an2+an1..35",
    title: "Unique license plate number",
    reg: /^(2J)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35}})/,
    desc: "Assigned to a transport unit which contains multiple packages.",
  },
  "3J": {
    identifier: "3J",
    format: "an2+an1..35",
    title: "Unique license plate number",
    reg: /^(3J)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35}})/,
    desc: "Assigned to a transport unit which is the lowest level of packaging, the unbreakable unit and which has EDI data associated with the unit.",
  },
  "4J": {
    identifier: "4J",
    format: "an2+an1..35",
    title: "Unique license plate number",
    reg: /^(4J)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35}})/,
    desc: "Assigned to a transport unit which contains multiple packages and which is associated with EDI data.",
  },
  "5J": {
    identifier: "5J",
    format: "an2+an1..20",
    title: "Unique license plate number",
    reg: /^(5J)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,20}})/,
    desc: "Assigned to a mixed transport unit containing unlike items on a single customer transaction and may or may not have associated EDI data.",
  },
  "6J": {
    identifier: "6J",
    format: "an2+an1..20",
    title: "Unique license plate number",
    reg: /^(6J)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,20}})/,
    desc: "Assigned to a master transport unit containing like items on a single customer transaction and may or may not have associated EDI data.",
  },
  "7J": {
    identifier: "7J",
    format: "",
    title: "Vehicle Registration License Plate Number",
    reg: /^(7J)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Not unique without identification of country and issuing governmental region/authority.",
  },
  "8J": {
    identifier: "8J",
    format: "an2+n9",
    title: "Maritime Mobile Service Identity (MMSI)",
    reg: /^(8J)([\x30-\x39]{9}})/,
    desc: "A nine digit number regulated by the International Telecommunications Union to uniquely identify a ship or a coast radio station.\nExample: 8J211123456",
  },
  // 9J-999J: Reserved for future assignment

  // Category 11 (K): Transaction Reference Used In Trading Relationships
  K: {
    identifier: "K",
    format: "",
    title: "Order Number",
    reg: /^(K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by Customer to identify a Purchasing Transaction (e.g., purchase order number).",
  },
  "1K": {
    identifier: "1K",
    format: "",
    title: "Order Number",
    reg: /^(1K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by Supplier to identify a Purchasing Transaction.",
  },
  "2K": {
    identifier: "2K",
    format: "",
    title: "Bill of Lading/Waybill/Shipment Identification Code",
    reg: /^(2K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by Supplier/Shipper.",
  },
  "3K": {
    identifier: "3K",
    format: "",
    title: "Bill of Lading/Waybill/Shipment Identification Code",
    reg: /^(3K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by Carrier.",
  },
  "4K": {
    identifier: "4K",
    format: "",
    title: "Line Number",
    reg: /^(4K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Line number of the order assigned by Customer to identify a Purchasing Transaction. (See Annex C.9).",
  },
  "5K": {
    identifier: "5K",
    format: "",
    title: "Reference Number",
    reg: /^(5K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the Customer to identify a Shipment Authorization (Release) against an established Purchase Order.",
  },
  "6K": {
    identifier: "6K",
    format: "",
    title: "PRO#",
    reg: /^(6K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by Carrier.",
  },
  "7K": {
    identifier: "7K",
    format: "",
    title: "Carrier Mode",
    reg: /^(7K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Free Text format mutually defined between Customer and Supplier (e.g., Air, Truck, Boat, Rail).",
  },
  "8K": {
    identifier: "8K",
    format: "",
    title: "Contract Number",
    reg: /^(8K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "9K": {
    identifier: "9K",
    format: "",
    title: "Generic Transaction Reference Code",
    reg: /^(9K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Internally assigned or mutually defined",
  },
  "10K": {
    identifier: "10K",
    format: "",
    title: "Invoice Number",
    reg: /^(10K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "11K": {
    identifier: "11K",
    format: "",
    title: "Packing List Number",
    reg: /^(11K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "12K": {
    identifier: "12K",
    format: "an3+an4+an1..25 ",
    title: "SCAC",
    reg: /^(12K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{5,25})/,
    desc: "(Standard Carrier Alpha Code) (an4 - dash “-” filled left) and carrier assigned PROgressive number.",
  },
  "13K": {
    identifier: "13K",
    format: "an3+an4+an1..12 ",
    title: "Bill of Lading Number /Transport Receipt Number",
    reg: /^(13K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{5,12})/,
    desc: "SCAC + Container cargo’s B/L number or waybill number.",
  },
  "14K": {
    identifier: "14K",
    format: "",
    title: "Combined Order Number and Line Number",
    reg: /^(14K)([\x30-\x39]+\+[\x30-\x39]+)/,
    desc: "In the format nn...nn+nn...n where a plus (+) symbol is used as a delimiter between the Order Number and Line Number.",
  },
  "15K": {
    identifier: "15K",
    format: "",
    title: "KANBAN Number",
    reg: /^(15K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "16K": {
    identifier: "16K",
    format: "",
    title: "DELINS Number",
    reg: /^(16K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Code assigned to identify a document which contains delivery information.",
  },
  "17K": {
    identifier: "17K",
    format: "",
    title: "Check Number",
    reg: /^(17K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "18K": {
    identifier: "18K",
    format: "",
    title: "Structured Reference",
    reg: /^(18K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(See Annex C.10)",
  },
  "19K": {
    identifier: "19K",
    format: "",
    title: "Foreign Military Sales Case Number",
    reg: /^(19K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "20K": {
    identifier: "20K",
    format: "",
    title: "License Identifier",
    reg: /^(20K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Being a globally unique identifier for a license or contract under which items are generated, submitted for processing and/or paid for, that is constructed by concatenating:\n⎯ an ISO/IEC 15459 issuing agency code;\n⎯ a license or contract number which accords with specifications of the issuing agency concerned;\nand that:\n⎯ comprises only upper case alphabetic and/or numeric characters;\n⎯ is unique (that is, is distinct from any other ISO/IEC 15459 compliant identifier) within the domain of the issuing agency;\n⎯ cannot be derived from any other ISO/IEC 15459 compliant identifier, issued under the same issuing agency, by the simple addition of characters to, or their removal from, its end",
  },
  "21K": {
    identifier: "21K",
    format: "",
    title: "Customer Data",
    reg: /^(21K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35})/,
    desc: "Being data that:\n⎯ from a customer perspective, is related to or associated with an item or transaction, or to a batch or related items or transactions, and\n⎯ comprises up to 35 printable characters and/or spaces, other than plus (+), drawn from the character set defined in ISO/IEC 646.",
  },
  "22K": {
    identifier: "22K",
    format: "",
    title: "Transaction Authentication Information",
    reg: /^(22K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Being a value, constructed by concatenating:\n⎯ an ISO/IEC 15459 issuing agency code;\n⎯ a value which accords with specifications of the issuing agency concerned,\nthat allows verification of the authenticity of the transaction concerned and, in particular, that the transaction was initiated by the party, claimed within the transaction to have been its initiator, by:\n⎯ the recipient of a transaction, and/or\n⎯ one or more of the parties involved in its handling or processing, and/or\n⎯ a trusted third party",
  },
  // 23K-24K: Reserved
  "25K": {
    identifier: "25K",
    format: "",
    title: "Global Unique Identification of Groupings of Transport Units",
    reg: /^(25K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the Carrier, defined as: Identification of a Party to a Transaction as defined assigned by a holder of a Company Identification Number (CIN) and including the related Issuing Agency Code (IAC) in accordance with ISO/IEC 15459 and its registry, structured as a sequence of 3 concatenated data elements: IAC, followed by CIN, followed by the Bill of Lading or Waybill or Shipment Identification Code that is unique within the CIN holder's domain.",
  },
  "26K": {
    identifier: "26K",
    format: "",
    title: "Global Unique Identification of Groupings of Transport Units",
    reg: /^(26K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the Shipper, defined as: Identification of a Party to a Transaction assigned by a holder of a Company Identification Number (CIN) and including the related Issuing Agency Code (IAC) in accordance with ISO/IEC 15459 and its registry, structured as a sequence of 3 concatenated data elements: IAC, followed by CIN, followed by the Bill of Lading or Waybill or Shipment Identification Code that is unique within the CIN holder's domain.",
  },
  "27K": {
    identifier: "27K",
    format: "an3+an1..35",
    title: "Supplier Assigned Quotation Number",
    reg: /^(27K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35})/,
    desc: "Number assigned to a quotation by the supplier in response to a request for quote from the customer.",
  },
  // 28K-999K: Reserved for future assignment

  // Category 12 (L): Location reference
  L: {
    identifier: "L",
    format: "",
    title: "Storage Location",
    reg: /^(L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "1L": {
    identifier: "1L",
    format: "",
    title: "Location",
    reg: /^(1L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "2L": {
    identifier: "2L",
    format: "",
    title: "Ship To",
    reg: /^(2L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Location Code defined by an industry standard or mutually defined.",
  },
  "3L": {
    identifier: "3L",
    format: "",
    title: "Ship From",
    reg: /^(3L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Location Code defined by an industry standard or mutually defined.",
  },
  "4L": {
    identifier: "4L",
    format: "an2+a2",
    title: "Country of Origin",
    reg: /^(4L)([\x41-\x5A\x61-\x7A]{2})/,
    desc: "Two-character ISO 3166 country code. With agreement of trading partners and when the Country of Origin is mixed, Country Code “AA” shall be used.",
  },
  "5L": {
    identifier: "5L",
    format: "",
    title: "Ship For",
    reg: /^(5L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Location Code defined by an industry standard or mutually defined.",
  },
  "6L": {
    identifier: "6L",
    format: "",
    title: "Route Code",
    reg: /^(6L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the supplier to designate a specific transportation path.",
  },
  "7L": {
    identifier: "7L",
    format: "an2+an6 ",
    title: "6-character Department of Defense Activity Code (DoDAAC).",
    reg: /^(7L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{6})/,
    desc: "",
  },
  "8L": {
    identifier: "8L",
    format: "",
    title: "Port of Embarkation",
    reg: /^(8L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Mutually Defined.",
  },
  "9L": {
    identifier: "9L",
    format: "",
    title: "Port of Debarkation",
    reg: /^(9L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Mutually Defined.",
  },
  // 10L: Reserved
  "11L": {
    identifier: "11L",
    format: "an3+n5..27",
    title: "Location",
    reg: /^(11L)([\x2D-\x2F\x30-\x39]{5,27})/,
    desc: "(Latitude/Longitude/Altitude) encoded in the format xnn.nnnnn/xnnn.nnnnnn/xnnnn",
  },
  "12L": {
    identifier: "12L",
    format: "an3+n5..27",
    title: "Ship To",
    reg: /^(12L)([\x2D-\x2F\x30-\x39]{5,27})/,
    desc: "(Latitude/Longitude/Altitude) encoded in the format xnn.nnnnn/xnnn.nnnnnn/xnnnn",
  },
  "13L": {
    identifier: "13L",
    format: "an3+n5..27",
    title: "Ship From",
    reg: /^(13L)([\x2D-\x2F\x30-\x39]{5,27})/,
    desc: "(Latitude/Longitude/Altitude) encoded in the format xnn.nnnnn/xnnn.nnnnnn/xnnnn",
  },
  // 14L: Reserved
  "15L": {
    identifier: "15L",
    format: "an3+n5..27",
    title: "Ship For",
    reg: /^(15L)([\x2D-\x2F\x30-\x39]{5,27})/,
    desc: "(Latitude/Longitude/Altitude) encoded in the format xnn.nnnnn/xnnn.nnnnnn/xnnnn",
  },
  "16L": {
    identifier: "16L",
    format: "an3+an1..60",
    title: "Tag Activation Location",
    reg: /^(16L)([\x20\x30-\x39\x41-\x5A\x61-\x7A]{1,60})/,
    desc: "English location name (character set: 0-9, A-Z <Space>).",
  },
  "17L": {
    identifier: "17L",
    format: "an3+an1..60",
    title: "Tag Deactivation Location",
    reg: /^(17L)([\x20\x30-\x39\x41-\x5A\x61-\x7A]{1,60})/,
    desc: "English location name (character set: 0-9, A-Z <Space>).",
  },
  "18L": {
    identifier: "18L",
    format: "an3+an2..12",
    title: "FAO Fishing Area Code",
    reg: /^(18L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{2,12})/,
    desc: "As defined by the Fisheries and Aquaculture Department of the FAO (http://www.fao.org. Search for Fishing Area Code sub-site).\nAll characters of the GS1 General Specification-defined sub-set of ISO/IEC 646 are allowed.\nExamples:\n18L37.1.3  Western Mediterranean Sea, Sardinia\n18L47.B.1  Atlantic, Southeast, SEAFO Division, Namibia EEZ\n18L67      Pacific, Northeast",
  },
  // 19L: Reserved
  "20L": {
    identifier: "20L",
    format: "",
    title: "Location: First Level",
    reg: /^(20L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(Interally assiged).",
  },
  "21L": {
    identifier: "21L",
    format: "",
    title: "Location: Second level",
    reg: /^(21L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(Interally assiged).",
  },
  "22L": {
    identifier: "22L",
    format: "",
    title: "Location: Third Level",
    reg: /^(22L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(Interally assiged).",
  },
  "23L": {
    identifier: "23L",
    format: "",
    title: "Location: Fourth Level",
    reg: /^(23L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(Interally assiged).",
  },
  "24L": {
    identifier: "24L",
    format: "",
    title: "Location: Fifth Level",
    reg: /^(24L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(Interally assiged).",
  },
  "25L": {
    identifier: "25L",
    format: "",
    title: "",
    reg: /^(25L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "26L": {
    identifier: "26L",
    format: "",
    title: "",
    reg: /^(26L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  // TODO // Locations 27L-55L
  // 56L-999L: Reserved for future assignment

  // TODO // Category 13 (M): Reserved

  // TODO // Category 14 (N): Industry Assigned Codes

  // Category 15 (O): Reserved
  // O-999O: Not recommended for use due to similarity of "0" (zero) to "O" (letter).

  // Category 16 (P): Item Information
  P: {
    identifier: "P",
    format: "a1+an..90",
    title: "Item Identification Code",
    reg: /^(P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,90})/,
    desc: "Item Identification Code assigned by Customer.",
  },
  // TODO // 1P-54P
  // 55P-999P: Reserved for future assignment

  // Category 17 (Q): Measurement
  Q: {
    identifier: "Q",
    format: "a1+n..30",
    title: "Quantity",
    reg: /^(Q)([\x2E\x30-\x39]{1,30})/,
    desc: "Quantity, Number of Pieces, or Amount (numeric only) (unit of measure and significance mutually defined.",
    overrideType: "number",
  },
  // TODO // 1Q-31Q
  // 32Q-999Q: Reserved for future assignment

  // TODO // Category 18 (R): Miscellaneous

  // Category 19 (S): Traceability Number For An Entity
  S: {
    identifier: "S",
    format: "a1+an..90",
    title: "Serial Number",
    reg: /^(S)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,90})/,
    desc: "Serial Number or Code Assigned by the Supplier to an Entity for its Lifetime, (e.g., computer serial number, traceability number, contract tool identification).",
  },
  // TODO // 1S-97S
  // 98S-999S: Reserved for future assignment

  // Category 20 (T): Traceability Number For Groups Of Entities
  T: {
    identifier: "T",
    format: "a1+an..90",
    title: "Serial Number",
    reg: /^(T)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,90})/,
    desc: "Traceability Number assigned by the Customer to identify/trace a unique group of entities (e.g., lot, batch, heat).",
  },
  "1T": {
    identifier: "1T",
    format: "an2+an..90",
    title: "Traceability Number",
    reg: /^(1T)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,90})/,
    desc: "Traceability Number assigned by the Supplier to identify/trace a unique group of entities (e.g., lot, batch, heat).",
  },
  // TODO // 2T-34T
  // 35T-999T: Reserved for future assignment

  // TODO // Category 21 (U): UPU/MH 10/SC8 Agreed Upon Codes

  // Category 22 (V): Party To The Transaction
  V: {
    identifier: "V",
    format: "a1+an..90",
    title: "Supplier Code",
    reg: /^(V)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,90})/,
    desc: "Supplier Code Assigned by Customer",
  },
  "1V": {
    identifier: "1V",
    format: "an2+an..90",
    title: "Supplier Code",
    reg: /^(1V)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,90})/,
    desc: "Supplier Code Assigned by Supplier",
  },
  "2V": {
    identifier: "2V",
    format: "an2+an..90",
    title: "Supplier Code",
    reg: /^(2V)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,90})/,
    desc: "U.P.C. Company Prefix.",
  },
  "3V": {
    identifier: "3V",
    format: "an2+an..90",
    title: "Supplier Code",
    reg: /^(3V)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,90})/,
    desc: "GS1 Company Prefix.",
  },
  // TODO // 4V-24V
  // 25V-999V: Reserved for future assignment

  // TODO // Category 23 (W): Activity Reference
  // TODO // W-12W
  // 13W-999W: Reserved for future assignment

  // Category 24 (X): Reserved
  // X-999X: Reserved

  // Category 25 (Y): Internal Applications
  xxY: {
    identifier: "xxY",
    format: "",
    title: "Internal Applications",
    reg: /^(\d{1,3}Y)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Never to appear on item/document which leaves a closed system environment",
  },
  // Y-999Y: Never to appear on item/document which leaves a closed system environment

  // TODO // Category 26 (Z): Mutually Defined
  Z: {
    identifier: "Z",
    format: "",
    title: "Mutually Defined Between Customer and Supplier",
    reg: /^(Z)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "1Z": {
    identifier: "1Z",
    format: "",
    title: "Mutually Defined Between Carrier and Supplier",
    reg: /^(1Z)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "2Z": {
    identifier: "2Z",
    format: "",
    title: "Mutually Defined Between Customer and Carrier",
    reg: /^(2Z)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "3Z": {
    identifier: "3Z",
    format: "",
    title: "Free Text",
    reg: /^(3Z)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "4Z": {
    identifier: "4Z",
    format: "",
    title: "Mutually Defined Between Carrier and Trading Partner",
    reg: /^(4Z)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  // 5Z-9Z: Reserved
  xxZ: {
    identifier: "xxZ",
    format: "",
    title: "Structured Free Text",
    reg: /^(\d{2}Z)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(Line 1-89 Data)",
  },
  "10Z": {
    identifier: "10Z",
    format: "",
    title: "Structured Free Text",
    reg: /^(10Z)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(Header Data).",
  },
  // 100Z-999Z: Reserved for future assignment
};
