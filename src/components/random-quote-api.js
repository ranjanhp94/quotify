import React from 'react';

class RandomQuoteApi extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleSavetoLocal = this.handleSavetoLocal.bind(this);
    }

    handleClick() {
        this.props.getQuoteFromApi()
    }

    handleSavetoLocal() {
        this.props.quote.btnEnable = true
        this.props.saveToLocal()
    }

    render() {
        let subtext = {
            opacity: 0.5
        }

        let font = {
            fontSize: 25,
            lineHeight: 0.9,
            opacity: 0.2
        }

        return (
            <div>

                <div className="w3-panel w3-leftbar">
                    <blockquote className="blockquote text-center">
                        {/* <i className="fa fa-quote-right w3-xxlarge"></i><br/> */}
                        <i className="w3-serif w3-xlarge">
                            <h2 className="mb-0"><i style={font} className="fa fa-quote-right w3-xlarge"></i> {this.props.quote.quoteText} <i style={font} className="fa fa-quote-right w3-xlarge"></i></h2>
                            <h4 style={subtext}> - <em>{this.props.quote.quoteAuthor}</em></h4>
                        </i>
                    </blockquote>
                </div>


                <button type="button" className="btn btn-success" onClick={this.handleSavetoLocal} disabled={this.props.quote.btnEnable} > {this.props.quote.btnEnable ? "Saved" : "Save to local"}</button>
                {' '}
                <button type="button" className="btn btn-secondary" onClick={this.handleClick}>Get Another Quote</button>
            </div>
        )
    }
}

export default RandomQuoteApi;