module.exports = {

  purge: false,
  theme: {
    extend: {
      colors: {
        gray: {
          '100': '#F7F1F0',
        },
        beige: '#D9CAB8',
        red:'#FF5101',
        yellow:'#e4ca4a',
        primary: '#FF5101',
        primaryDark:'#E82E2E',
        nav:'#1d1d1d',
      },
      boxShadow:{
        md:' 0px 0px 4px rgba(30, 32, 33, 0.6)'
      },
      borderWidth: {
        default: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '8': '8px',
      },
      borderRadius:{
        'xl':'19px'
      },
      height: {
        'half': '50vh',
      },
      fontSize:{
        'xxs':'10px',
        'xs':'13px',
        'sm':'16px',
        'md':'18px',
        'reg':'19px',
        'lg':'24px',
        'xl':'26px',
        '3xl':'32px',
        '4xl':'37px',
        '2xl':'28px',
        '5xl':'45px',
        '6xl':'64px',
        '7xl':'79px',
      },
      fontFamily: {
       'sans': ['Roboto', 'Arial'],
      }
    }
  },
  variants: {},
  plugins: [],
}