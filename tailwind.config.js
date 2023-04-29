/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      keyframes: {
        writing: {
          "0%": {
            opacity: 0,
            transform: "translateX(-20px)",
          },
          "50%": {
            opacity: 1,
            transform: "translateX(0)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        rotate: {
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        orbit: {
          "49%": { zIndex: 1 },
          "50%": { left: "25em", zIndex: -1 },
          "99%": { zIndex: -1 },
          "100%": { left: "-11em", zIndex: 1 },
        },
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
        rotate: "rotate 10s linear infinite",
        orbit: "orbit 20s infinite ease-in-out",
        writing: "writing 5s linear forwards",
      },
    },
  },
  plugins: [],
};
