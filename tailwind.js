module.exports = {

  purge: false,
  theme: {
    extend: {
      colors: {
        gray: {
          '100': '#F7F1F0',
        },
        primary:'#660b14',
       // primary:'#e29686',
        blue:'#053959',
        teal:'#037f8c',
        aqua: '#5abfbf'
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
        'xs':'12px',
        'sm':'14px',
        'reg':'16px',
        'md':'24px',
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