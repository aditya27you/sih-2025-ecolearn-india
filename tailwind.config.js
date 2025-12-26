export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "oklch(60% 0.20 165)",
        secondary: "oklch(58% 0.15 195)",
        accent: "oklch(70% 0.18 45)",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        "ecolearn-light": {
          "primary": "oklch(60% 0.20 165)",
          "secondary": "oklch(58% 0.15 195)",
          "accent": "oklch(70% 0.18 45)",
          "base-100": "oklch(98% 0.01 165)",
          "base-200": "oklch(95% 0.02 165)",
          "base-300": "oklch(90% 0.03 165)",
          "base-content": "oklch(25% 0.015 165)",
          "info": "oklch(65% 0.15 240)",
          "success": "oklch(58% 0.18 150)",
          "warning": "oklch(75% 0.17 85)",
          "error": "oklch(62% 0.20 30)",
        },
      },
    ],
  },
}
