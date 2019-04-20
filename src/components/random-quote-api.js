import React from 'react';

class RandomQuoteApi extends React.Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleSavetoLocal = this.handleSavetoLocal.bind(this);
    }

    handleClick(){
        this.props.getQuoteFromApi()
    }

    handleSavetoLocal(){
        this.props.quote.btnEnable = true
        this.props.saveToLocal()
    }

    render(){
        return(
            <div>
                <h2>{this.props.quote.quoteText}</h2>
                <h3>{this.props.quote.quoteAuthor}</h3>

                <button className="btn-btn-success" type = "button" onClick={this.handleSavetoLocal} disabled ={this.props.quote.btnEnable} >{this.props.quote.btnEnable ? "saved" : "save to local"}</button>

                <button className="btn-btn-secondary" onClick = {this.handleClick}>Get Another Quote</button>
            </div>
        )
    }
}

export default RandomQuoteApi;