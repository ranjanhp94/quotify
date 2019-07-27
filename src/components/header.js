import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import axios from 'axios';
import RandomQuoteApi from './random-quote-api';
import RandomFromLocal from './random-quote-local';
import AddQuote from './add-quote';
import ListAllQuotes from './list-all-quotes';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            quote: {
                quoteText: '',
                quoteAuthor: '',
            },
            randomQuote: '',
            quoteText: '',
            quoteAuthor: '',
            btnEnable: false,
            quotes: localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')) : []
        }
        this.getQuoteFromApi = this.getQuoteFromApi.bind(this);
        this.saveToLocal = this.saveToLocal.bind(this);
        this.handleLocalQuote = this.handleLocalQuote.bind(this);
        this.handleDeleteQuote = this.handleDeleteQuote.bind(this);
        this.addQuote = this.addQuote.bind(this);
    }

    componentDidMount() {
        this.getQuoteFromApi()
    }

    getQuoteFromApi() {
        axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json').then(response => {
            this.setState({
                quote: {
                    quoteText: response.data.quoteText,
                    quoteAuthor: response.data.quoteAuthor,
                }
            })
        })
    }

    saveToLocal() {
        this.setState({
            quotes: this.state.quotes.concat(this.state.quote)
        }, () => {
            localStorage.setItem('quotes', JSON.stringify(this.state.quotes))
        })
    }

    handleLocalQuote() {
        this.setState({
            randomQuote: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
        })
    }

    addQuote(quote1) {
        if (quote1.quoteText !== "" && quote1.quoteAuthor !== "") {
            this.state.quotes.push(quote1)
            localStorage.setItem('quotes', JSON.stringify(this.state.quotes))
        }
    }

    handleDeleteQuote(quote) {
        this.setState(prevState => ({
            quotes: prevState.quotes.filter(q => q.quoteText !== quote)
        }), () => {
            localStorage.setItem('quotes', JSON.stringify(this.state.quotes))
        })
    }


    render() {
        // console.log(this.state.quotes)
        return (
            <BrowserRouter>
                <div>
                    <br />
                    <h1>Quotify</h1>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/">Random Quote (API)</Link>  </BreadcrumbItem>
                        <BreadcrumbItem><Link to="/saved-quotes">Random Quote (Local)</Link>  </BreadcrumbItem>
                        <BreadcrumbItem><Link to="/new-quote">Add Quote</Link>  </BreadcrumbItem>
                        <BreadcrumbItem><Link to="/list-all-saved-quotes">List All Quotes</Link> </BreadcrumbItem>
                    </Breadcrumb>

                    <Route path="/" exact render={() => <RandomQuoteApi quote={this.state.quote} saveToLocal={this.saveToLocal} getQuoteFromApi={this.getQuoteFromApi} />} />
                    <Route path="/saved-quotes" render={() => <RandomFromLocal random={this.state.randomQuote} handleLocalQuote={this.handleLocalQuote} />} />
                    <Route path="/new-quote" exact render={() => <AddQuote addQuote={this.addQuote} />} />
                    <Route path="/list-all-saved-quotes" exact render={() => <ListAllQuotes quotes={this.state.quotes} handleDeleteQuote={this.handleDeleteQuote} />} />
                </div>
            </BrowserRouter>
        )
    }
}

export default Header;