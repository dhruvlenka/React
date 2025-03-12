import styles from "./myntranav.module.css"
import logo from "./image/myntra.png"

const MyntraNav = () => {
    return (
        <nav id={styles.nav}>
            <aside className={styles.logo}> 
            <img src={logo} alt=""/>
            </aside>
            <ul>
                <li> MEN </li>
                <li> WOMEN </li>
                <li> KIDS </li>
                <li> HOME & LIVING </li>
                <li> BEAUTY </li>
                <li> STUDIO </li>
             </ul>
        </nav>
    )
}
export default MyntraNav;