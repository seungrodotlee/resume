const plugin = require("tailwindcss/plugin");

const customPlugins = plugin(({ addComponents, addUtilities, addVariant }) => {
  addUtilities({
    ".flex-center": {
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
    },
  });

  addComponents({
    ".container": {
      width: "100%",
      maxWidth: "800px",
      padding: "0 1.5rem",
      margin: "0 auto",
    },
  });

  addVariant("under", "& > *");
});

module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [customPlugins],
};
