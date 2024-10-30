/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens:{
        "xs":{"min":"200px" ,"max":"425px"}
      },
    },
  },
  plugins: [],
}

