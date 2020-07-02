module.exports = {

  purge: false,
  theme: {
    extend: {
      colors: {
        gray: {
          '100': '#F7F1F0',
        },
        burgundy:'#660b14',
        yellow:'#e4ca4a',
        primary: '#FF5101',
        primaryDark:'#E82E2E',
        nav:'#1d1d1d',
        blue:'#053959',
        teal:'#037f8c'
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
        'xs':'14px',
        'sm':'16px',
        'md':'20px',
        'reg':'18px',
        'lg':'28px',
        'xl':'36px',
      },
      fontFamily: {
       'cursive': ['Pacifico', 'Arial'],
      }
    }
  },
  variants: {},
  plugins: [],
}