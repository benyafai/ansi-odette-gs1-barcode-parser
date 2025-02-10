export type AIList = { [key: string]: AIType };

export type AIType = {
  identifier: string;
  format: string;
  title: string;
  reg: unknown;
  desc: string;
  value?: string | number;
  processed?: string | number;
  formatter?: string;
};
