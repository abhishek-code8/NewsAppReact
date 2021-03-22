import React from 'react';
import Row from 'react-bootstrap/Row';
import NewsCard from '../card/Card';



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apidata: [],
            dbJson : []
        }
        this.dbStore=this.dbStore.bind(this);
    }

    componentDidMount() {
        let url = "http://newsapi.org/v2/everything?q=apple&from=2021-03-16&to=2021-03-16&sortBy=popularity&apiKey=75b7ea3d15c34d96a7dd0dc273787e17";
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                this.setState({
                    apidata: data
                });
            });
        //console.log(this.state.apidata);
    }

    dbStore(obj){
        let newdb = this.state.dbJson;
        newdb.push(obj);
        this.setState({
            dbJson:newdb
        })     
        console.log(newdb);   
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

export default Dashboard;
