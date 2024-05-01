/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        gray: {
          "100": "#fcfcff",
          "200": "#f6fcfd",
          "300": "rgba(30, 30, 30, 0.4)",
        },
        seagreen: "rgba(74, 129, 96, 0.7)",
        white: "#fff",
        lightgray: "#d2d2d2",
        darkgray: {
          "100": "#a2a2a2",
          "200": "#9e9e9e",
        },
        darkslateblue: "#0c1f51",
        mediumaquamarine: "#4fb697",
        ghostwhite: "#f7faff",
        whitesmoke: "#e9e9eb",
        gainsboro: "#e3e3e3",
        silver: "#bbb",
        lavender: "#dce4f8",
        cornflowerblue: "#7396d8",
        steelblue: "#4f79b6",
      },
      fontFamily: {
        "merriweather-sans": "'Merriweather Sans'",
        "noto-sans": "'Noto Sans'",
        roboto: "Roboto",
        monoton: "Monoton",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "9xl": "28px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      "4xs": "9px",
      inherit: "inherit",
    }
  },
  plugins: [require("tailwindcss-animate"), nextui()],
}