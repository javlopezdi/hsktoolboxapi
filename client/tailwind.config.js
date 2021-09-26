module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        // "hero-image":
        //   "url('https://images.unsplash.com/photo-1573657860361-fb4f92943790?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        "hero-pattern":
          "linear-gradient(0deg, rgba(17,26,44,0.5), rgba(252,252,252,0.65)), url('https://images.unsplash.com/photo-1573657860361-fb4f92943790?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        "signUp-pattern":
          "linear-gradient(0deg, rgba(37,110,255,0.85), rgba(37,110,255,0.85)), url('https://images.unsplash.com/photo-1526716173434-a1b560f2065d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')",
        "first-panda":
          "url('https://images.unsplash.com/photo-1593526492327-b071f3d5333e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        "second-panda":
          "url('https://images.unsplash.com/photo-1518247268172-e153ae1a7300?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        "third-panda":
          "url('https://images.unsplash.com/photo-1608475125659-558cd2d12e83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        "fourth-panda":
          "url('https://images.unsplash.com/photo-1622892735236-a3c8f017d45e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        "fifth-panda":
          "url('https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        "sixth-panda":
          "url('https://images.unsplash.com/photo-1585355597830-654035143d75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1092&q=80')",
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
