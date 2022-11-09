import { globalCss } from ".";

export const globaStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
    fontSize: '1.6rem',
    fontWeight: 400,
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  'button': {
    cursor: 'pointer',
  },

  'html':{
    fontSize: '62.5%'
  },
})