import style from "./flipkartnav.module.css"
import logo from "./image/FlipkartLogo.png"
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const FlipkartNav = () => {
    return (
        <nav>
            <aside className={style.logo}>
                <img src={logo} alt=""/>
            </aside>
            <section className={style.searchContainer}>searchContainer</section>
            <ul>
                <li><FaUserCircle />Login</li>
                <li><MdOutlineShoppingCart /> Cart</li>
                <li>become a seller</li>
                <li>...</li>
            </ul>
        </nav> 
    );
};

export default FlipkartNav;