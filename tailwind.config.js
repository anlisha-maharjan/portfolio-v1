tailwind.config = {
  theme: {
    fontFamily: { body: ['"Dosis"'] },
    extend: {
      width: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: {
          100: "#e0fff8",
          200: "#c1fff0",
          300: "#a2ffe9",
          400: "#83ffe1",
          500: "#64ffda",
          600: "#50ccae",
          700: "#3c9983",
          800: "#286657",
          900: "#14332c",
        },
      },
      backgroundColor: {
        body: "#0a192f",
        navy: "#112240",
      },
      textColor: {
        default: "#8892b0",
      },
    },
  },
};
