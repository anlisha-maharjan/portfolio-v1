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
          100: "#fce0d9",
          200: "#fac1b3",
          300: "#f7a28c",
          400: "#f58366",
          500: "#f26440",
          600: "#c25033",
          700: "#913c26",
          800: "#61281a",
          900: "#30140d",
        },
      },
      backgroundImage: {
        basicgrad: "linear-gradient(135deg, #f26440 0%,#725690 100%)",
      },
      backgroundColor: {
        body: "#fdffff",
      },
      textColor: {
        default: "#004E70",
      },
    },
  },
};
