import { css } from "styled-components";

//  contant

// unused

const WHITE_COLOR = "#FFFFFF";
const BLOCK_COLOR = "#151515";
const HOVER_GREY_COLOR = "#F8F8F8";

const GERY_BROWN_COLOR = "#AAAAAA";
const BRWON_COLOR = "#AFA196";
const DARK_BROWN_COLOR = "#676564";
const LIGHT_BRWON_COLOR = "#FBF9F7";

// study master ------------------------------------------ used
const RED_COLOR = "#e02020";

const GREY_COLOR_LIGHT = "#F7F7F7";
const GREY_COLOR = "#6d7278";
const GREY_COLOR_DARK = "#6D6D6D";

const YELLOW_COLOR_LIGHT = "#fff9e3";
const YELLOW_COLOR = "#FFC700";
const YELLOW_COLOR_DARK = "#FFA800";

const ORANGE_COLOR_LIGHT = "#ff9f5e";
const ORANGE_COLOR = "#fa6400";
const ORANGE_COLOR_DARK = "#fa6400";

const BLUE_COLOR_LIGHT = "#65d1fc";
const BLUE_COLOR = "#0db7fa";
const BLUE_COLOR_DARK = "#009fde";

// mainColor 3가지 변경시 - theme 변경

const MAIN_COLOR_LIGHT = YELLOW_COLOR_LIGHT;
const MAIN_COLOR = YELLOW_COLOR;
const MAIN_COLOR_DARK = YELLOW_COLOR_DARK;

// mixin ColorMixin

const ColorMixin = {
  ColorMain: css`
    color: ${MAIN_COLOR};
  `,
};
// mixin LayoutMixin
const LayoutMixin = {
  flexH: css`
    display: flex;
    flex-flow: row nowrap;
  `,
  flexHC: css`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  `,
  flexV: css`
    display: flex;
    flex-flow: column nowrap;
  `,
  flexVC: css`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  `,
  centering: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

// mixin ComponentMixin
const ComponentMixin = {
  ButtonNormal: css`
    border: solid 1px rgba(109, 114, 120, 0.1);
    color: rgba(0, 0, 0, 0.25);
  `,
  ButtonAble: css`
    background-color: ${MAIN_COLOR};
    border: solid 1px ${MAIN_COLOR};
    color: white;
  `,
  ButtonDisable: css`
    border: solid 1px rgba(109, 114, 120, 0.1);
    background-color: rgba(0, 0, 0, 0.04);
    color: rgba(0, 0, 0, 0.25);
  `,
  ButtonOutline: css`
    color: ${MAIN_COLOR_DARK};
    border: solid 1px ${MAIN_COLOR_DARK};
  `,
  TextInputNormal: css`
    border: solid 1px rgba(109, 114, 120, 0.1);
  `,
  TextInputAble: css`
    background-color: ${MAIN_COLOR};
    border: solid 1px ${MAIN_COLOR};
    color: white;
  `,
  TextInputDisable: css`
    border: solid 1px rgba(109, 114, 120, 0.1);
    background-color: rgba(0, 0, 0, 0.04);
    color: rgba(0, 0, 0, 0.25);
  `,
  TextInputOutline: css`
    color: ${MAIN_COLOR_DARK};
    border: solid 1px ${MAIN_COLOR_DARK};
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

  yellowColor: `${YELLOW_COLOR}`,
  hoverGreyColor: `${HOVER_GREY_COLOR}`,

  /* custom Color */

  // study master ==================== used ====================

  // colors
  RedColor: `${RED_COLOR}`,

  MainColor1: `${MAIN_COLOR_LIGHT}`,
  MainColor2: `${MAIN_COLOR}`,
  MainColor3: `${MAIN_COLOR_DARK}`,

  OrangeColor1: `${ORANGE_COLOR_LIGHT}`,
  OrangeColor2: `${ORANGE_COLOR}`,
  OrangeColor3: `${ORANGE_COLOR_DARK}`,

  BlueColor1: `${BLUE_COLOR_LIGHT}`,
  BlueColor2: `${BLUE_COLOR}`,
  BlueColor3: `${BLUE_COLOR_DARK}`,

  GreyColor1: `${GREY_COLOR_LIGHT}`,
  GreyColor2: `${GREY_COLOR}`,
  GreyColor3: `${GREY_COLOR_DARK}`,
  ColorPlaceHolder: `#bbbbbb`,

  /* study master theme color */
  orangeColor: `${ORANGE_COLOR}`,
  blueColor: `${BLUE_COLOR}`,

  /**shadow */
  boxShadow: `box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);`,

  //border
  borderMain: `1px solid ${MAIN_COLOR};`,

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

const FTheme = { ...Theme, ...ColorMixin, ...LayoutMixin, ...ComponentMixin };

export default FTheme;
