import Link from "next/link";

import navbarStyles from "../styles/Navbar.module.scss";

const NavItem = ({
  text,
  href,
  active,
}: {
  text: string;
  href: string;
  active: boolean;
}) => {
  return (
    <Link href={href}>
      <a className={navbarStyles.navLink}>{text}</a>
    </Link>
  );
};

export default NavItem;
