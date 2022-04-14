module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/global-components/**/*.{js,ts,jsx,tsx}",
    "./src/components/property-components/**/*.{js,ts,jsx,tsx}",
    "./src/components/section-components/**/*.{js,ts,jsx,tsx}",
    "./src/components/step/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'primary': '#0063A7',
      },
    },
  },
  plugins: [],
}
