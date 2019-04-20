import React from 'react';

class RandomFromLocal extends React.Component{
    constructor(props){
        super(props);
        this.handleLocal = this.handleLocal.bind(this);
    }

    handleLocal(){
        this.props.handleLocalQuote()
    }

    render(){
        return(
            <div>
                <h2>{this.props.random.quoteText}</h2>
                <h3>{this.props.random.quoteAuthor}</h3>
                <button className="btn btn-primary" onClick={this.handleLocal}>Get Quote Local</button>
            </div>
        )
    }
}

export default RandomFromLocal;