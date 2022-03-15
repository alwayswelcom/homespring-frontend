module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'available': '-webkit-fill-available',
      },
      padding: {
        15: '60px',
      },
      colors: {
        violet: {
          850: '#4200FF',
          250: '#DFE3E8'
        }
      }
    }
  }
}
