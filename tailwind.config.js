/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#F3F4F6",
        "secondary-bg": "#E5E7EB",
        "tertiary-bg": "#2E3791",
        "quanternary-bg": "#4F4D93",

        "primary-border": "#8993F8",
        "secondary-border": "#21217D",
        "tertiary-border": "#FCD0D0",
        "quanternary-border": "#F87171",
        "quinary-border": "#6B7280",

        "primary-text": "#1B0500",
        "secondary-text": "#475263",
        "tertiary-text": "#4C5867",
        "quanternary-text": "#596171",
      },
    },
  },
  plugins: [],
};
