/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    themes: {
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
    darkMode: "class",
    plugins: [
      require('tailwindcss-animated'),
      nextui({
      defaultTheme: "infinity",
      themes: {
        infinity: {
          layout: {}, // light theme layout tokens
          colors: {
            ghostWhite: "#f8f8ff",
            black: "#272a2af2",
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
            secondary:{
              //... 50 to 900
              background: "#C3C3C3",
              foreground: "#FFFFFF",
              DEFAULT: "#FF0000",
            },
            // ... rest of the colors
          },
        },
        // ... custom themes
      },
    })],
}
