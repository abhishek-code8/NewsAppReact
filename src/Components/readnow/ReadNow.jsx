import React, { Component } from 'react';
import readnowService from '../../services/readNow';
import getdata from './getdata';
import NewsCard from '../card/Card';
import Row from 'react-bootstrap/Row';

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            article:[]
        }
    }
    tk = localStorage.getItem('token');
    componentDidMount(){
        console.log(this.tk);
        readnowService(this.tk).then((data) =>{
            console.log(data);
        })
    let dataArt = getdata(this.tk);
        dataArt.then((data) => {
            this.setState({
                article:data
            })
            
        })
        


    }



    render(){
        if(this.state.article.length==0 || this.state.article.message =="Unauthorized"){
            return (
                <div>No aarticles</div>
            )
        }else{
            return(
                <div className="container md">
 
                   <Row fluid={true}>
                        {this.state.article.map((article) => {
                            return <NewsCard a={article} />
                        })}
                    </Row>
                </div>
            )

        }
        
    }

}

export default Register;