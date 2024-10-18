/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1AA8C6",
      },
      fontSize: {
        "46px": "46px",
        "18px": "18px",
      },
      backgroundImage: {
        background: "url('/images/bg.png')",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
