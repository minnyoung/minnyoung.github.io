/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-black": "#2D2D2E",
      },
      keyframes: {
        up: {
          "0%": {
            transform: "translateY(0)",
          },
          "27.5%": {
            transform: "translateY(-100%)",
          },
          "55%": {
            transform: "translateY(-200%)",
          },
          "82.5%": {
            transform: "translateY(-300%)",
          },
          "100%": {
            transform: "translateY(-400%)",
          },
        },
      },
      animation: {
        up: "up 10000ms cubic-bezier(0.57, 0.01, 0.21, 0.99) infinite",
      },
    },
  },
  plugins: [],
};
