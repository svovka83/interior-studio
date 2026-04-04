// services
import { preloader } from "./js/services/preloader.js";
import { formValidation } from "./js/services/form-validation.js";

// utils
import { initBurgerMenu } from "./js/utils/burger-menu.js";
import { initPopupForm } from "./js/utils/popup-form.js";
import { initPopupConfirmation } from "./js/utils/popup-confirmation.js";
import { popupDropdown } from "./js/utils/popup-dropdown.js";
import { dropdownObserver } from "./js/utils/dropdown-observer.js";
import { chooseSubmenuItem } from "./js/utils/submenu.js";
import { chooseFile } from "./js/utils/attach.js";

// sliders
import { oneNewsSlider } from "./js/sliders/one-news.js";
import { mainSlider } from "./js/sliders/main.js";
import { aboutSlider } from "./js/sliders/about.js";
import { counterButtons } from "./js/sliders/counter-buttons.js";

// services
preloader();
formValidation();

// utils
initBurgerMenu();
initPopupForm();
initPopupConfirmation();
popupDropdown();
dropdownObserver();
chooseSubmenuItem();
chooseFile();

// sliders
oneNewsSlider();
mainSlider();
aboutSlider();
counterButtons();
