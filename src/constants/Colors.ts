const tintColorLight = '#2f95dc';
const tintColorDark = '#257fd5'
const colorDark = 'rgb(40,40,40)';
const colorWhite = 'rgb(255,255,255)';
const colorGray = 'rgb(120, 120, 120)';


export default {
  light: {
    text: colorDark,
    secondaryText: colorGray,
    background: colorWhite,
    secondaryBackground: colorWhite,
    border: colorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    tintColor: colorDark
  },
  dark: {
    text: colorWhite,
    secondaryText: colorGray,
    background: colorDark,
    secondaryBackground: 'rgb(45,45,45)',
    border: 'rgb(74, 74, 74)',
    tabIconDefault: colorGray,
    tabIconSelected: colorWhite,
    tintColor: tintColorDark
  },
};
