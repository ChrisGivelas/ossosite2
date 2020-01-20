import Suppliers from "../components/sections/Suppliers";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

export const HOME_PAGE = "home";
export const LANDING = "landing";
export const SUPPLIERS = "shop";
export const ABOUT = "about";
export const CONTACT = "contact";

const home_page_subroute_mapping = {
    [SUPPLIERS]: Suppliers,
    [ABOUT]: About,
    [CONTACT]: Contact
};

const routes = {
    [HOME_PAGE]: home_page_subroute_mapping
};

export default routes;
