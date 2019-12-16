import Suppliers from "../components/sections/Suppliers";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

export const SUPPLIERS = "shop";
export const ABOUT = "about";
export const CONTACT = "contact";

const mapping = {
    [SUPPLIERS]: Suppliers,
    [ABOUT]: About,
    [CONTACT]: Contact
};

export default mapping;
