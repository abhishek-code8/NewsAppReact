import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const db =require('../../db.json');
//const writeJsonFile = require('write-json-file');
const fs = require('fs');

class NewsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    // async EntryFunc(objectArticle) {
    //     await writeJsonFile('../../db.json', objectArticle);
    // }
    // handleClick = (obj)=>{
           
    //     fs.readFile('src/db.json', (err, data) => {
    //     if (err) throw err;
    //     let newarray= JSON.parse(data);
    //     newarray.push(this.props.a);
    //     fs.writeFile("src/db.json", JSON.stringify(newarray,null,2), err => { 
    //         if(err) throw err;
    //         console.log("Success in db.json");
    //     }); 
    
    //     })
    
    // }


    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.a.urlToImage} />
                <Card.Body>
                    <Card.Title>{this.props.a.title}</Card.Title>
                    <Card.Text>
                        {this.props.a.content}
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        )
    }


}
export default NewsCard;
