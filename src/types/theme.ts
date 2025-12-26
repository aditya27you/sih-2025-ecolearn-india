export interface ColorPalette {
  primary: string;   // Emerald Green
  secondary: string; // Ocean Teal
  accent: string;    // Coral Orange
  base100: string;   // Background
  info: string;
  success: string;
  warning: string;
  error: string;
}

export interface TypographyConfig {
  fontFamily: {
    sans: string[]; // Nunito
    heading: string[]; // Poppins
  };
}
