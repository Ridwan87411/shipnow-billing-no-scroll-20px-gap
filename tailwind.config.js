/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px"
    },
    extend: {
      colors: {
        brand: {
          50: "#f5f2ff",
          100: "#eee9ff",
          200: "#ddd5ff",
          300: "#c4b5ff",
          400: "#a68cff",
          500: "#856DF3",
          600: "#7c63ef",
          700: "#684fd4",
          800: "#5643ad",
          900: "#49398c"
        },
        ink: "#252525",
        canvas: "#f3f3f4",
        line: "#e9e9ec",
        muted: "#888890",
        success: "#2fbd77",
        danger: "#e95f68",
        warning: "#d9a62e"
      },
      borderRadius: {
        card: "12px"
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04)",
        float: "0 10px 30px rgba(30, 24, 62, 0.12)"
      }
    }
  },
  plugins: []
};
