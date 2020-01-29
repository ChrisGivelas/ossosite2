import React from "react";
import {withRouter} from "react-router-dom";
import {NavHashLink as NavLink, HashLink as Link} from "react-router-hash-link";
import {HOME_PAGE, LANDING} from "../../routes";
import NavbarLogo from "../../assets/images/2020 LOGO (SIMPLE).png";
import {debounce} from "../../utils";

const VIEWPORT_HEIGHT = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shrink: false
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", e => {
            const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

            if (!this.state.shrink) {
                if (scrollPos > VIEWPORT_HEIGHT) {
                    this.setState({shrink: true});
                }
            } else {
                if (scrollPos < VIEWPORT_HEIGHT) {
                    this.setState({shrink: false});
                }
            }
        });
    }
    render() {
        const parent_route = this.props.route;
        const sub_routes = this.props.subroutes;

        const isActive = r => this.props.location.hash.substr(1) === r;

        return (
            <div id="navbar" className={`elevation-level-3${this.state.shrink ? " shrink" : ""}`}>
                <div id="navbar-main">
                    <Link smooth id="navbar-logo-link" to={`${HOME_PAGE}#${LANDING}`}>
                        <img id="navbar-logo" src={NavbarLogo} alt="Osso City Lighting" />
                    </Link>
                    <hr />
                    <div id="nav-items">
                        {Object.keys(sub_routes).map(route => {
                            return (
                                <NavLink
                                    isActive={isActive}
                                    smooth
                                    scroll={() => {
                                        var element = document.getElementById(route);
                                        var headerOffset = 75;
                                        var elementPosition = element.offsetTop;
                                        var offsetPosition = elementPosition - headerOffset;

                                        window.scrollTo({
                                            top: offsetPosition,
                                            behavior: "smooth"
                                        });
                                    }}
                                    key={route}
                                    className="navlink"
                                    activeClassName="selected"
                                    to={`${parent_route}#${route}`}
                                >{`${route}.`}</NavLink>
                            );
                        })}
                    </div>
                </div>
                <div id="navbar-extra-info">
                    <p>
                        <a href="mailto:info@ossolighting.ca">info@ossolighting.ca</a>
                    </p>
                    <p>
                        <a href="tel:905-404-6776">905-404-6776</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar);
