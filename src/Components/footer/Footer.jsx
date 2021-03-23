import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';


class Footer extends React.Component {


    render() {
        return (
            <Navbar bg="dark" variant="dark" className="justify-content-center">
                <Navbar.Text >News @2021</Navbar.Text>
            </Navbar>)
    }
}

export default Footer;