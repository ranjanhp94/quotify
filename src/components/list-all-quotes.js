import React from 'react';
import ShowQuote from './ShowQuote';

class ListAllQuotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // local: JSON.parse(localStorage.getItem('quotes'))
        }
        // this.handleDelete = this.handleDelete.bind(this);
    }

    // handleDelete(quote) {
    //     this.props.handleDeleteQuote(quote)
    // }

    render() {
        return (
            <div>
                {this.props.quotes.map((quote, index) => <ShowQuote {...quote} key={quote.quoteText} handleDeleteQuote={this.props.handleDeleteQuote} index={index} />)}
            </div>
        )
    }
}

export default ListAllQuotes;