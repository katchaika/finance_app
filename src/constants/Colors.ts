const tintColorLight = '#2f95dc';
const colorDark = 'rgb(40,40,40)';
const colorWhite = 'rgb(255,255,255)'; 

export default {
  light: {
    text: '#000',
    background: '#fff',
    border: colorDark,
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: colorWhite,
    background: colorDark,
    border: 'rgb(85,85,85)',
    tint: colorWhite,
    tabIconDefault: 'rgb(162,162,162)',
    tabIconSelected: colorWhite,
  },
};
