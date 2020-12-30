/* custom */

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

// used

const LIGHT_GREY_COLOR = "#F7F7F7";
const GREY_COLOR = "#6d7278";
const DARK_GREY_COLOR = "#6D6D6D";

// study master ------------------------------------------

const ORANGE_COLOR = "#fa6400";
const BLUE_COLOR = "#0db7fa";

// footer color

const Theme = {
  /* custom Color */
  whiteColor: `${WHITE_COLOR}`,
  blackColor: `${BLOCK_COLOR}`,
  lightBrownColor: `${LIGHT_BRWON_COLOR}`,
  brownColor: `${BRWON_COLOR}`,
  darkBrownColor: `${DARK_BROWN_COLOR}`,
  greyColor: `${GREY_COLOR}`,

  redColor: `${RED_COLOR}`,
  yellowColor: `${YELLOW_COLOR}`,
  hoverGreyColor: `${HOVER_GREY_COLOR}`,

  // used
  GreyColor1: `${LIGHT_GREY_COLOR}`,
  GreyColor2: `${GREY_COLOR}`,
  GreyColor3: `${DARK_GREY_COLOR}`,
  /* study master theme color */
  orangeColor: `${ORANGE_COLOR}`,
  blueColor: `${BLUE_COLOR}`,

  /* custom border */
  borderDefault: `1px solid ${LIGHT_GREY_COLOR};`,
  borderBrownTransparent: `2px solid transparent`,
  borderBrown: `2px solid ${BRWON_COLOR};`,
  borderBrownDefault: `4px solid transparent;`,
  borderBrownHover: `4px solid ${GERY_BROWN_COLOR};`,
  borderBrownStrong: `4px solid ${BRWON_COLOR};`,

  borderBrownDefault1px: `1px solid transparent;`,
  borderBrownHover1px: `1px solid ${GERY_BROWN_COLOR};`,
  borderBrownStrong1px: `1px solid ${BRWON_COLOR};`,

  borderRed: `1px solid ${RED_COLOR};`,
  borderRadius: "30px",
  boxBorder: `1px solid ${LIGHT_GREY_COLOR}`,

  /**shadow */
  boxShadow: `0 0 2px 0.5px rgba(21, 21, 21, 0.05),0 1px 5px 0 rgba(21, 21, 21, 0.15)`,

  // study master ------------------------------------------

  /*breakpoints */

  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};
export default Theme;
