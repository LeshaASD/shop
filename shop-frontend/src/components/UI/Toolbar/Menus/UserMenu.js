import React, {Fragment} from 'react';
import {MenuItem, Nav, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const UserMenu = ({user, logout}) => {
    const navTitle = (
        <Fragment>
            Hello, <b>{user.username}</b>!
        </Fragment>
    );

    return (
        <Nav pullRight>
            <NavDropdown title={navTitle} id="user-menu">
                <LinkContainer to="/profile">
                    <MenuItem>Edit profile</MenuItem>
                </LinkContainer>
                <MenuItem divider />
                <MenuItem onClick={logout}>Logout</MenuItem>
            </NavDropdown>
        </Nav>
    )
};

export default UserMenu;