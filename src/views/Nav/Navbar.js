import React from "react";
import { MenuItem, Menu } from 'semantic-ui-react'
import "./nav.scss";
import { Link,NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Home from "../Example/Home";

class Navbar extends React.Component{
    render() {
        return(
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                /
                <NavLink to="/todo" activeClassName="active">ToDo</NavLink>
                /
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </div>
            
        )
    }
}

export default Navbar;