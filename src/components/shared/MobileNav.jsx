import React from "react";
import NavItems from "./NavItems";
import routes, {HOME_PAGE} from "../../routes";

function MobileNav() {
    return (
        <div id="mobile-nav">
            <NavItems subroutes={routes[HOME_PAGE]} route={HOME_PAGE} />
        </div>
    );
}

export default MobileNav;
