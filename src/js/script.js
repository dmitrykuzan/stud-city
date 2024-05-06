"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { burger, dynamicAdaptive, mobileCheck, modals } from "./functions/";
import { reviewSlider } from "./components/reviewSlider";

// Components
// import { formValidation } from "./components/";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  dynamicAdaptive();
  burger();
  reviewSlider();
  modals();
});
