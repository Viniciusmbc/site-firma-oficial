/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      keyframes: {
        mosaic: {
          from: {
            opacity: 0,
            transform: "scale(0)",
          },
          to: { opacity: 1, transform: "scale(1)" },
        },
        highlight: {
          from: {
            backgroundImage: "linear-gradient(to right, #098A5C, #098A5C)",
            backgroundPosition: "-100% 0",
            backgroundRepeat: "no-repeat",
            backgroundSize: "0 100%",
          },
          to: {
            backgroundImage: "linear-gradient(to right, #098A5C, #098A5C)",
            backgroundPosition: "0 0",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          },
        },
      },
      animation: {
        highlight: "highlight .9s ease forwards",
        mosaic: "mosaic 1s forwards",
      },
    },
  },
  plugins: [],
};
