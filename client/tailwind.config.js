module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        richBlack: "#111a2c",
        blueCrayola: "#256eff",
        semiWhite: "#fcfcfc",
        platinum: "#ebebeb",
        verdigris: "#28afb0",
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["active", "hover"],
    },
  },
  plugins: [],
};
