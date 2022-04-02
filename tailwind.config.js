module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-glitch": "#1E101F",
        "glitch-orange": "#F97316",
        "glitch-box": "#5D4A5D",
        "glitch-bar": "#3B2939",
      },
    },
    // fontFamily: {
    //   sans: ["Lato", "sans-serif"],
    //   serif: ["ui-serif", "Georgia"],
    //   mono: ["ui-monospace", "SFMono-Regular"],
    //   display: ["Oswald"],
    //   body: ["Open Sans"],
    // },
    backgroundImage: (theme) => ({
      "dot-pattern": "url('assets/images/pattern.svg')",
    }),
  },
  plugins: [],
};
