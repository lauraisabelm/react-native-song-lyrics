export const required = (value: string) =>
  value === '' || value === null || value === undefined ? '* Required field' : undefined;
