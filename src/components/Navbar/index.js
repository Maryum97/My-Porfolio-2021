import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import PropTypes from 'prop-types';
import NavItems from '../NavItems';

function NavbarPorfolio() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="warning" light>
                <NavbarBrand href="/" className="mr-auto">Maryum<b>Bokhari</b></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <NavItems />
                </Collapse>
            </Navbar>
        </div>
    );
}

NavbarToggler.propTypes = {
    type: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

export default NavbarPorfolio;