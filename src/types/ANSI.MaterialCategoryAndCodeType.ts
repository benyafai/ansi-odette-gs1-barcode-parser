export type ANSIMaterialCategoryAndCodeType = {
  [key: string]: {
    description: string;
    codes: {
      [key: string]: {
        description: string;
        examples: string;
      };
    };
  };
};
