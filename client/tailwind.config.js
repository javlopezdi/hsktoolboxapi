module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern":
          "linear-gradient(0deg, rgba(17,26,44,0.5), rgba(252,252,252,0.65)), url('https://images.unsplash.com/photo-1573657860361-fb4f92943790?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        "signUp-pattern":
          "linear-gradient(0deg, rgba(37,110,255,0.85), rgba(37,110,255,0.85)), url('https://images.unsplash.com/photo-1526716173434-a1b560f2065d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')",
      }),
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
