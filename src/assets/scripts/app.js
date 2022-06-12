import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupSlideTheme from "@swup/slide-theme";
import SwupA11yPlugin from "@swup/a11y-plugin";

const swup = new Swup({
  animateHistoryBrowsing: true,
  plugins: [
    new SwupHeadPlugin(),
    new SwupA11yPlugin(),
    new SwupSlideTheme({
      reversed: true,
    }),
  ],
});
