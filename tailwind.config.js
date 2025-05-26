/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#203764",
        primary: "#2D4B8A",
        accent: "#06D6A0",
        danger: "#F94144",
        "bg-light": "#F7FAFC",
        dark: "#22223B",
      },
    },
  },
  plugins: [],
};
