import { css } from "styled-components";

//  contant

// unused

const WHITE_COLOR = "#FFFFFF";
const BLOCK_COLOR = "#151515";
const HOVER_GREY_COLOR = "#F8F8F8";

const GERY_BROWN_COLOR = "#AAAAAA";
const BRWON_COLOR = "#AFA196";
const DARK_BROWN_COLOR = "#676564";
const RED_COLOR = "#CE4C44";
const YELLOW_COLOR = "#FBF9F7";
const LIGHT_BRWON_COLOR = "#FBF9F7";

// study master ------------------------------------------ used

const GREY_COLOR_LIGHT = "#F7F7F7";
const GREY_COLOR = "#6d7278";
const GREY_COLOR_DARK = "#6D6D6D";

const ORANGE_COLOR_LIGHT = "#ff9f5e";
const ORANGE_COLOR = "#fa6400";
const ORANGE_COLOR_DARK = "#fa6400";

const BLUE_COLOR_LIGHT_ = "#65d1fc";
const BLUE_COLOR = "#0db7fa";
const BLUE_COLOR_DARK = "#009fde";

const MAIN_COLOR_LIGHT_ = ORANGE_COLOR_LIGHT;
const MAIN_COLOR = ORANGE_COLOR;
const MAIN_COLOR_DARK = ORANGE_COLOR_DARK;

// mixin

const Mixin = {
  flexH: css`
    display: flex;
    flex-flow: row nowrap;
  `,
  flexHC: css`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  `,
  ColorMain: css`
    color: ${MAIN_COLOR};
  `,
};

const Theme = {
  whiteColor: `${WHITE_COLOR}`,
  blackColor: `${BLOCK_COLOR}`,
  lightBrownColor: `${LIGHT_BRWON_COLOR}`,
  brownColor: `${BRWON_COLOR}`,
  darkBrownColor: `${DARK_BROWN_COLOR}`,

  greyColor: `${GREY_COLOR}`,
  borderDefault: `1px solid ${GREY_COLOR_LIGHT};`,
  borderBrownTransparent: `2px solid transparent`,
  borderBrown: `2px solid ${BRWON_COLOR};`,
  borderBrownDefault: `4px solid transparent;`,
  borderBrownHover: `4px solid ${GERY_BROWN_COLOR};`,
  borderBrownStrong: `4px solid ${BRWON_COLOR};`,

  borderBrownDefault1px: `1px solid transparent;`,
  borderBrownHover1px: `1px solid ${GERY_BROWN_COLOR};`,
  borderBrownStrong1px: `1px solid ${BRWON_COLOR};`,

  redColor: `${RED_COLOR}`,
  yellowColor: `${YELLOW_COLOR}`,
  hoverGreyColor: `${HOVER_GREY_COLOR}`,

  /* custom border */
  borderRed: `1px solid ${RED_COLOR};`,
  borderRadius: "30px",
  boxBorder: `1px solid ${GREY_COLOR_LIGHT}`,

  /* custom Color */

  // study master ==================== used ====================

  // colors

  MainColor1: `${MAIN_COLOR_LIGHT_}`,
  MainColor2: `${MAIN_COLOR}`,
  MainColor3: `${MAIN_COLOR_DARK}`,

  GreyColor1: `${GREY_COLOR_LIGHT}`,
  GreyColor2: `${GREY_COLOR}`,
  GreyColor3: `${GREY_COLOR_DARK}`,
  ColorPlaceHolder: `#bbbbbb`,
  /* study master theme color */
  orangeColor: `${ORANGE_COLOR}`,
  blueColor: `${BLUE_COLOR}`,

  /**shadow */
  boxShadow: `box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);`,

  // layout

  /*breakpoints */
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

const FTheme = { ...Theme, ...Mixin };

export default FTheme;
