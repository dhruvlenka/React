import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import About from "./About";

const NavBar = () => {
    return (
        <BrowserRouter>
        {/* NavigationBar */}
        <nav style={{backgroundColor: 'yellow', padding: '15px'}}>
        <ul style={{listStyle:'none', display:'flex', gap:'20px', fontSize: '20px'}}>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li> 
                <Link to="/blog"> Blog </Link>
            </li>
            <li> 
                <Link to="/contact"> Contact </Link>
            </li>
            <li> 
                <Link to="/about"> About </Link>
            </li>
        </ul>
        </nav>

        {/* Route Definitions */}
        <div style={{padding:'20px', fontSize:'20px'}}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blog" element={<Blogs/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default NavBar;