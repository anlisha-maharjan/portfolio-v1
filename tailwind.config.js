module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1280px",
      },
    },
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
        secondary: {
          100: "#ccdce2",
          200: "#99b8c6",
          300: "#6695a9",
          400: "#33718d",
          500: "#004e70",
          600: "#003e5a",
          700: "#002f43",
          800: "#001f2d",
          900: "#001016",
        },
      },
      backgroundImage: {
        basicgrad: "linear-gradient(135deg, #f26440 0%,#725690 100%)",
      },
      backgroundColor: {
        body: "#ECF0F3",
      },
      textColor: {
        default: "#004E70",
      },
      animation: {
        fadeInTop: "fadeInTop 1s ease-in forwards",
      },
      keyframes: {
        fadeInTop: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "tracking-out-contract-bck": {
          "0%": {
            transform: "translateZ(0)",
            opacity: 1,
          },
          "40%": {
            opacity: 0.6,
          },
          "100%": {
            "letter-spacing": "1em",
            transform: " translateZ(400px)",
            opacity: 0,
          },
        },
        "tracking-in-contract-bck": {
          "0%": {
            "letter-spacing": "1em",
            transform: "translateZ(400px)",
            opacity: 0,
          },
          "40%": {
            opacity: 0.6,
          },
          "100%": {
            transform: "translateZ(0)",
            opacity: 1,
          },
        },
        "slide-from-top": {
          "0%": {
            transform: "translateY(-100px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        "slide-to-top": {
          "0%": {
            transform: "translateY(0)",
            opacity: 1,
          },
          "100%": {
            transform: "translateY(-100px)",
            opacity: 0,
          },
        },
        "slide-from-bottom": {
          "0%": {
            transform: "translateY(100px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        "slide-to-bottom": {
          "0%": {
            transform: "translateY(0)",
            opacity: 1,
          },
          "100%": {
            transform: "translateY(100px)",
            opacity: 0,
          },
        },
      },
      zIndex: {
        "-1": "-1",
        1: "1",
      },
      animation: {
        fadeInTop: "fadeInTop 1s ease-in forwards",
        "tracking-out-contract-bck":
          "tracking-out-contract-bck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
        "tracking-in-contract-bck":
          "tracking-in-contract-bck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
        "slide-from-top":
          "slide-from-top 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
        "slide-to-top":
          "slide-to-top 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
        "slide-from-bottom":
          "slide-from-bottom 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
        "slide-to-bottom":
          "slide-to-bottom 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
      },
    },
  },
  plugins: [require("tailwindcss-children")],
};
