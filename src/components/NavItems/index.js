import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function NavItems() {
    return (
        <Nav navbar>
            <NavItem>
                <NavLink href="/">About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/contact">Contact</NavLink>
            </NavItem>
        </Nav>
    )
}

export default NavItems;