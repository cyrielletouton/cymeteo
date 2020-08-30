import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

  const CustomNavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">CyMétéo <i className="fas fa-binoculars"></i></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                    <NavLink href="/">Mes villes</ NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="/">Actualités</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="/">Mer</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="/">Montagne</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
  }

export default CustomNavBar;

