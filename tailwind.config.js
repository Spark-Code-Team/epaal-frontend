/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blurbg: "#75717180",
        evaamCyan: "#41B1AC",
        evaamBackground: "#E8F5F9",
        evaamGreen: "#1d434c"
      },

      backgroundImage: {
        "banner": "./public/image/banner.png"
      },

      boxShadow: {
        '3xl': '0px 4px 15px 0px rgba(0, 0, 0, 0.25)',
        "topShodow": "0px -10px 5px #E1EDF0"
      },

      Keyframes: {
        collapse: {
          '0%': { height: '100px' },
          '100%': { height: '0' },
        },
        expand: {
          '0%': { height: '0' },
          '100%': { height: '100px' },
        },
      },

      animation: {
        collapse: 'collapse 0.5s ease-in-out forward',
        expand: 'expand 0.5s ease-in-out forward',
      }
      
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
