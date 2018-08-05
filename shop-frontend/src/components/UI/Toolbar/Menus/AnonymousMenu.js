import React from 'react';
import {Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const AnonymousMenu = () => (
    <Nav pullRight>
        <LinkContainer to="/register" exact>
            <NavItem>Sign Up</NavItem>
        </LinkContainer>
        <LinkContainer to="/login" exact>
            <NavItem>Login</NavItem>
        </LinkContainer>
    </Nav>
);

export default AnonymousMenu;