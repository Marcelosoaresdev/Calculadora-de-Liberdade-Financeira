/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#34d399",
        "primary-dark": "#059669",
        accent: "#60a5fa",
        danger: "#ef4444",
        "bg-light": "#f9fafb",
        dark: "#111827",
      },
    },
  },
  plugins: [],
};
