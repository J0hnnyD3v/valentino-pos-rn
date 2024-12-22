import { Colors } from './src/constants/Colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: {
          primary: Colors.light.primary,
          secondary: Colors.light.secondary,
          tertiary: Colors.light.tertiary,
          success: Colors.light.success,
          link: Colors.light.link,
          danger: Colors.light.danger,
          text: Colors.light.text,
          background: Colors.light.background,
        },
        dark: {
          primary: Colors.dark.primary,
          secondary: Colors.dark.secondary,
          tertiary: Colors.dark.tertiary,
          success: Colors.dark.success,
          link: Colors.dark.link,
          danger: Colors.dark.danger,
          text: Colors.dark.text,
          background: Colors.dark.background,
        },
      },
    },
  },
  plugins: [],
};
