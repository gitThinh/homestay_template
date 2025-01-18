/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#F8F9FA",
          100: "#E7EAEC",
          200: "#D6DADE",
          300: "#C0C6CB",
          400: "#A2A9B0",
          500: "#475467",
          600: "#3F454C",
          700: "#343A40",
          800: "#2B3035",
          900: "#212529",
        },
        primary: {
          50: "#ffedd8",
          100: "#f3d5b5",
          200: "#e7bc91",
          300: "#d4a276",
          400: "#bc8a5f",
          500: "#a47148",
          600: "#8b5e34",
          700: "#6f4518",
          800: "#603808",
          900: "#583101",
        },
      },
      
    },
  },
  plugins: [],
}

