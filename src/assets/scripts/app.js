import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupSlideTheme from "@swup/slide-theme";
import SwupA11yPlugin from "@swup/a11y-plugin";
import SwupScriptsPlugin from "@swup/scripts-plugin";

const swup = new Swup({
  animateHistoryBrowsing: true,
  plugins: [
    new SwupHeadPlugin(),
    new SwupScriptsPlugin(),
    new SwupA11yPlugin(),
    new SwupSlideTheme({
      reversed: true,
    }),
  ],
});
