import { heightToDP } from "react-native-responsive-screens";
import { ms, vs } from "react-native-size-matters";

export const COLORS = {
  dark: {
    primary: '#014468',
    primaryLight: '#A9BABC',
    secondary: '#016268',
    black: 'black',
    white: '#FFFFFF',
    orange: '#D87528',

    blue: "#005DE9",
    lightBlue: "#DDE8F9",
    darkBlue: "#114B9A",

    // background: "black",

    red: "#FF1B1B",
    green: '#00C257',
    lightGreen: "#DDE8E8",
    tealGreen: "#12676A",
    background: "#F6F6F6",

    lightWhite: "rgba(255,255,255,0.2)",
    purple: "#4E1DFF",

    grey: '#6B7280',
    darkGrey: '#424242',
    lightgrey: '#9BA1A4',
    borderGrey: '#CED7DA',
    slateGrey: "#EDEDED",
    greyText: "#4E4E4E",

  },
  light: {
    primary: '#014468',
    secondary: '#016268',
    primaryLight: '#A9BABC',
    black: 'black',
    white: '#FFFFFF',
    orange: '#D87528',


    blue: "#005DE9",
    lightBlue: "#DDE8F9",
    darkBlue: "#114B9A",

    background: "#F6F6F6",

    red: "#FF1B1B",
    lightGreen: "#DDE8E8",
    green: '#00C257',
    tealGreen: "#12676A",

    lightWhite: "rgba(255,255,255,0.2)",
    purple: "#4E1DFF",

    grey: '#6B7280',
    darkGrey: '#424242',
    lightgrey: '#9BA1A4',
    borderGrey: '#CED7DA',
    slateGrey: "#EDEDED",
    greyText: "#4E4E4E",
  },
  // primary: '#004E80',
  // primaryLight: '#A9BABC',
  // secondary: '#F4F3E4',
  // black: '#000000',
  // lightgrey: '#9BA1A4',
  // grey: '#6B7280',
  // darkGrey: '#424242',
  // borderGrey: '#CED7DA',
  // white: '#FFFFFF',
  // orange: '#D87528',
  // darkRed: '#A5281F',
  // brightRed: '#FF0000',
  // green: '#4AC17D',
};

export const FONTS = {
  "roboto": {
    reqular: "Roboto-Regular",
    bold: "Robot-Bold",
    italic: "Robot-italic"
  },
  "sf-pro-display": {
    reqular: "SFProDisplay-Regular",
    bold: "SFProDisplay-Bold",
    italic: "SFProDisplay-LightItalic"
  },
}
//  "SFProDisplay-Bold",
//  "SFProDisplay-LightItalic",
//  "SFProDisplay-Regular",

export const FIXED_SIZES = {
  padding: ms(15),
  paddingHorizontal: ms(15),

  bigBorderRadius: ms(12),
  mediumBorderRadius: ms(10),
  smallBorderRadius: ms(8),

  buttonRadius: ms(40),
  buttonHeight: ms(30),

  screenPadding: ms(12),
  screenHorizontalPadding: ms(50),

  dashHeaderHeight: heightToDP(30),
  screenHeaderHeight: heightToDP(15)
}