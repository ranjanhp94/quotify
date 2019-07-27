import React from 'react';

class RandomFromLocal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isData: false
        }
        this.handleLocal = this.handleLocal.bind(this);
    }

    handleLocal() {
        this.setState({
            isData: true
        })
        this.props.handleLocalQuote()
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

        let btnfix = {
            position: 'fixed',
            bottom: 130,
            left: 185
        }

        return (
            <div>
                {this.state.isData ? <div className="w3-panel w3-leftbar">
                    <blockquote className="blockquote text-center">
                        <i className="w3-serif w3-xlarge">
                            <h2 className="mb-0"><i style={font} className="fa fa-quote-right w3-xlarge"></i> {this.props.random.quoteText} <i style={font} className="fa fa-quote-right w3-xlarge"></i></h2>
                            <h4 style={subtext}> - <em>{this.props.random.quoteAuthor}</em></h4>
                        </i>
                    </blockquote>
                </div> : ''}

                <button style={btnfix} className="btn btn-secondary" onClick={this.handleLocal}>Get Quote Local</button>
            </div>
        )
    }
}

export default RandomFromLocal;