/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        green: "#16AA1B",
        lgreen: "#1acf21",
        mgreen: "#00925E",
      },
    },
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    gridTemplateColumns: {
      // Complex site-specific column configuration
      // LS1: "1fr, 0.7528846fr",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {},
      },
    ],
  },
  plugins: [require("daisyui")],
};
/** @type {import('tailwindcss').Config} */
