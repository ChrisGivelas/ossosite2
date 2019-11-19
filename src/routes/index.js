import Suppliers from "../components/unique/Suppliers";
import About from "../components/unique/About";
import Contact from "../components/unique/Contact";

export const SUPPLIERS = "suppliers";
export const ABOUT = "about";
export const CONTACT = "contact";

const mapping = {
    [SUPPLIERS]: Suppliers,
    [ABOUT]: About,
    [CONTACT]: Contact
};

export default mapping;
