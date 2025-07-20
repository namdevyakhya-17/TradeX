import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };

    const handleProfileClick = (index) => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    return (
        <div className="menu-container">
            <div className="profile" onClick={handleProfileClick}>
                <div className="avatar">VN</div>
                <p className="username">Vyakhya</p>
            </div>
            <div className="menus">
                <ul>
                    <li>
                        <a
                            href="http://localhost:3000/"
                            style={{ textDecoration: "none" }}
                            onClick={() => handleMenuClick(0)}
                        >
                            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                                Home
                            </p>
                        </a>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/orders"
                            onClick={() => handleMenuClick(1)}
                        >
                            <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                                Orders
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/holdings"
                            onClick={() => handleMenuClick(2)}
                        >
                            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                                Holdings
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/positions"
                            onClick={() => handleMenuClick(3)}
                        >
                            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                                Positions
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/funds"
                            onClick={() => handleMenuClick(4)}
                        >
                            <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                                Funds
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/summary"
                            onClick={() => handleMenuClick(6)}
                        >
                            <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                                Summary
                            </p>
                        </Link>
                    </li>
                </ul>
                <hr />
            </div>
            <img src="media/images/logo_tradex_large.png" style={{ width: "80px" }} />
        </div>
    );
};

export default Menu;