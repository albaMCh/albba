import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./navItem.component";

import navbarStyles from "../styles/Navbar.module.scss";

const MENU_LIST = [
  { text: "Inicio", href: "/" },
  { text: "Sobre mí", href: "/sobre-mi" },
  { text: "Contacto", href: "/contacto" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className={navbarStyles.header}>
      <nav className={navbarStyles.nav}>
        <div
          onClick={() => setNavActive(!navActive)}
          className={navbarStyles.menuBar}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className={`${navActive ? navbarStyles.menuList_active : ""} ${
            navbarStyles.menuList
          }`}
        >
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
