import React from 'react';
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import logo from '../logo.svg';
import icon_active from '../ICON_ACTIVE.svg';
import icon_inactive from '../ICON_INACTIVE.svg';

// Little sidebar with our nav, active/inactive

const Sidebar = (props) => {
    return(
        <Nav
            className="sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item className="nav-logo">
                <Nav.Link href="/"><img src={logo} alt="IT Promocodes" /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/"><img src={icon_inactive} alt="IT Promocodes" /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/"><img src={icon_inactive} alt="IT Promocodes" /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/"><img src={icon_inactive} alt="IT Promocodes" /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/"><img src={icon_inactive} alt="IT Promocodes" /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/"><img src={icon_inactive} alt="IT Promocodes" /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/"><img src={icon_inactive} alt="IT Promocodes" /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/"><img src={icon_active} alt="IT Promocodes" /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/"><img src={icon_inactive} alt="IT Promocodes" /></Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

const SidebarNav = withRouter(Sidebar);
export default SidebarNav;