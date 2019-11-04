import {Unique} from "../components";

export const SUPPLIERS = "suppliers";
export const ABOUT = "about";
export const CONTACT = "contact";

const {Suppliers, About, Contact} = Unique;

export const mapping = {
    [SUPPLIERS]: Suppliers,
    [ABOUT]: About,
    [CONTACT]: Contact
};
