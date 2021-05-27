import React from 'react';
import Row from 'react-bootstrap/Row';
import NewsCard from '../card/Card';



class DisplayCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apidata: [],
            dbJson : []
        }
        this.dbStore=this.dbStore.bind(this);
    }

    componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=tesla&from=2021-04-27&sortBy=publishedAt&apiKey=75b7ea3d15c34d96a7dd0dc273787e17";
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    apidata: data
                });
            });
        console.log( this.state.apidata);
    }

    async addNews(news){ 
        console.log(news);
       await fetch("http://localhost:3001/api/v1/news",{method: "post",headers:{'content-Type':"application/json"},body: JSON.stringify(news),});
        console.log("added");
    }
    dbStore(obj){
        let newdb = this.state.dbJson;
        newdb.push(obj);
        this.addNews=(newdb);
        this.setState({
            dbJson:newdb
        })     
        
        console.log("hello");   
    }


    render() {
        if (this.state.apidata.articles == null) {
            return <div></div>
        } else {
            return (
                <div className="container md">
                    <Row fluid={true}>
                        {this.state.apidata.articles.map((article) => {
                            return <NewsCard a={article} addFunction = {this.dbStore} />
                        })}
                    </Row>
                </div>
            );
        }

    }
}

export default DisplayCard;
