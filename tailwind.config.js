module.exports = {
  purge: {
    enabled: true, // minim. css 
    content: [
      "./public/*.html"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },
        cyan: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
        },
      },

      screens: {
        
      },
      //Tento font nebyl nakonec použit, ale může být alternativou.
      fontFamily: {
        galanoGrotesqueBold: ['"GalanoGrotesqueBold"'],
        galanoGrotesqueThin: ['"GalanoGrotesqueThin"'],
        galanoGrotesqueLight: ['"GalanoGrotesqueLight"'],
        galanoGrotesqueMedium: ['"GalanoGrotesqueMedium"'],
        galanoGrotesqueRegular: ['"GalanoGrotesqueRegular"'],
        galanoGrotesqueSemiBold: ['"GalanoGrotesqueSemiBold"'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      grayscale: ['hover', 'focus'],
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
};
