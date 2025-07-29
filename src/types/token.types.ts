export const Tokens = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
} as const;

export type Token = (typeof Tokens)[keyof typeof Tokens];
