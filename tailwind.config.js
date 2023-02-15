/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.stories.@(js|jsx|ts|tsx)",
  ],
  theme: {
    extend: {
      // scroll 애니메이션 추가 (crop 0.0.2)
      animation: {
        scroll: "scroll 10s linear infinite",
        fadein: "fadein 2s ease-out",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc((78% + 8px) * -8))" },
        },
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
