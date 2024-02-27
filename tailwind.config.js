/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        "350px": "350px",
        "800px":"800px"
      },
    },
  },
  plugins: [],
};
