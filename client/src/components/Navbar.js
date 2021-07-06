import React, { useState } from "react";
import nav from "../sass/_Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Logo } from "../imgs/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [barClosed, setBarClosed] = useState(true);

    return (
        <nav className={nav.navContainer}>
            <div className={`${nav.logoBarContainer}`}>
                <Link to="/">
                    <Logo className={nav.logo} />
                </Link>
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setBarClosed(!barClosed)}
                    className={nav.bars}
                />
            </div>

            <ul
                className={`${nav.navListContainer} ${
                    barClosed ? "" : nav.active
                }`}
                onClick={() => setBarClosed(!barClosed)}
                >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/newProducts">New</Link>
                </li>
                <li>
                    <Link to="/bestSellers">Beast Sellers</Link>
                </li>
                <li>
                    <Link to="/aboutUs">About Us</Link>
                </li>
                <li>
                    <Link to="/">Contacts</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
