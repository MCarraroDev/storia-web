export const colors = {
  primary: '#4A4036',    // marrone scuro per il testo principale
  secondary: '#826F66',  // marrone medio per elementi secondari
  background: '#D4C8BE', // beige medio-scuro per lo sfondo
  paper: '#E8E0D5',      // beige chiaro per cards e navbar
  accent1: '#A65D57',    // rosso mattone per accenti primari
  accent2: '#7D9367'     // verde oliva per accenti secondari
} as const;

export type ColorKeys = keyof typeof colors;
