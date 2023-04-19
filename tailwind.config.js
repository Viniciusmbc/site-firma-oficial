/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      keyframes: {
        highlight: {
          "0%": {
            backgroundImage: "linear-gradient(to right, #098A5C, #098A5C)",
            backgroundPosition: "100% 0",
            backgroundRepeat: "no-repeat",
            backgroundSize: "0 100%",
          },
          "100%": {
            backgroundImage: "linear-gradient(to right, #098A5C, #098A5C)",
            backgroundPosition: "0 0",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          },
        },
      },
      animation: {
        highlight: "highlight 1s ease-out ",
      },
    },
  },
  plugins: [],
};
