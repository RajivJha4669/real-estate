/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  important: true,
  theme: {
    extend: {
      height: {
        "c-view": "calc(100% - 100px)",
      },
      rotate: {
        17: "17deg",
      },
      fontSize: {
        base: ["1rem", { lineHeight: "1.5rem" }],
      },
      fontFamily: {
        primary: ["Geologica", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#430e92",
        secondary: "#7D41FF",
        success: "#0eb500",
        error: "#ff3743",
        accent: "#007169",
        warn: "#ef4444",
        purple: "#3a243b",
        "c-light": "#f0f0f0",
      },
      boxShadow: {
        boxShadowc: "0px 0px 8px 4px gray",
      },
    },
    screens: {
      xs: "320px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "2560px",
    },
  },
  plugins: [],
  safelist: ["bg-accent", "bg-primary"],
};
