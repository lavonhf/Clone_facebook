import RightNav from "./rightNav";
import LeftNav from "./leftNav";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return <nav className=' pr-7 w-screen h-16 bg-neutral-800 flex items-center justify-between fixed z-10'>
        <LeftNav />
        <CustomLink to="/" icon="fi fi-sr-home" />
        <CustomLink to="/friend" icon="fi fi-sr-user" />
        <CustomLink to="/video" icon="fi fi-sr-play-alt" />
        <CustomLink to="/market" icon="fi fi-rr-shop" />
        <CustomLink to="/group" icon="fi fi-rr-users-alt" />
        <RightNav />
    </nav>
}
function CustomLink({ to, icon }) {
    return <NavLink
        to={to}
        className="hover:bg-neutral-600 md:block cus-nav hidden"
    >
        <i className={icon}></i>
    </NavLink>
}

export default Navbar;