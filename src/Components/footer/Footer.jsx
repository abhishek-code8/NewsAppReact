import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';


class Footer extends React.Component {
    componentDidMount() {
        let url = 'http://newsapi.org/v2/everything?q=apple&from=2021-03-16&to=2021-03-16&sortBy=popularity&apiKey=75b7ea3d15c34d96a7dd0dc273787e17';
        fetch(url).then((response) => response.json()).then((data) => console.log('This is your data', data));
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" className="justify-content-center">
                <Navbar.Text >News @2021</Navbar.Text>
            </Navbar>)
    }
}

export default Footer;