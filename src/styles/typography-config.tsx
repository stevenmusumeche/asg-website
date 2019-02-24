/**
 * Configures Typography.js 
 */
import Typography, { TypographyOptions } from "typography";

const config: TypographyOptions = {
  googleFonts: [
    {
      name: "ZCOOL KuaiLe",
      styles: ["400"],
    },
    {
      name: "Lobster", 
      styles: ["400"],
    },
  ],
  headerFontFamily: ["ZCOOL KuaiLe"],
  bodyFontFamily: ["Lobster"],
};

const typography = new Typography(config);
export default typography;
