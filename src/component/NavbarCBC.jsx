import { Component } from "react";
// CLASS BASED COMPONENTS // IT MUST BE EXTENDED FIRST 
class NavbarCBC extends Component{
    render() {
        return (
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Signin</li>
                </ul>
            </nav>
        );
    }
}
export default NavbarCBC;