export const colors = {
  primary: '#2b2d42',
  secondary: '#8d99ae',
  background: '#edf2f4',
  accent1: '#ef233c',
  accent2: '#d90429'
} as const;

export type ColorKeys = keyof typeof colors;
