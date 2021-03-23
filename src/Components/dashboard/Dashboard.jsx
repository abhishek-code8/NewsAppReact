import React from 'react';
import NewsCards from '../card/Card';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apidata: []
        }
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
        console.log(this.state.apidata);
    }


    render() {
        if (this.state.apidata.articles == null) {
            return <div></div>
        } else {
            return (
                <div className="container md">
                    <Row fluid={true}>
                        {this.state.apidata.articles.map((article) => {
                            return <NewsCards a={article} />
                        })}
                    </Row>
                </div>
            );
        }

    }
}

export default Dashboard;