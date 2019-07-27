import React from 'react'

class ShowQuote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isClicked: false,
            index: this.props.index,
            quoteText: this.props.quoteText,
            quoteAuthor: this.props.quoteAuthor,
            local: JSON.parse(localStorage.getItem('quotes'))
        }
    }

    handleEditClick = () => {
        this.setState((prevState) => ({ isClicked: !prevState.isClicked }))
    }

    handleChangeText = (e) => {
        e.preventDefault();
        this.setState({
            quoteText: e.target.value
        })
    }

    handleChangeAuthor = (e) => {
        e.preventDefault();
        this.setState({
            quoteAuthor: e.target.value
        })
    }

    handleUpdate = (e) => {
        e.preventDefault();
        var data = {
            index: this.state.index,
            quoteText: this.state.quoteText,
            quoteAuthor: this.state.quoteAuthor
        }

        let arr = this.state.local;
        arr.splice(data.index, 1)
        localStorage.setItem('quotes', JSON.stringify(arr.concat(data)));

        this.setState({
            isClicked: false,
            quoteText: data.quoteText,
            quoteAuthor: data.quoteAuthor
        })
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.setState({
            isClicked: false
        })
    }

    showForm() {
        return (
            <div>
                <form onSubmit={this.handleUpdate}>
                    <textarea type="textarea" name="quoteText" onChange={this.handleChangeText} value={this.state.quoteText} cols="20" rows="5"></textarea><br />
                    <input type="text" name="quoteAuthor" onChange={this.handleChangeAuthor} value={this.state.quoteAuthor}></input><br /><br />
                    <button className="btn btn-secondary btn-sm" type="submit">Update</button>{' '}
                    <button className="btn btn-secondary btn-sm" onClick={this.handleCancel} >Cancel</button>
                </form>
            </div>
        )
    }

    showText() {

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
                <h2><i style={font} className="fa fa-quote-right w3-xxlarge"></i> {this.state.quoteText}<i style={font} className="fa fa-quote-right w3-xxlarge"></i></h2>
                <h3 style={subtext}> - <em> {this.state.quoteAuthor} </em></h3>
                <button className="btn btn-secondary btn-sm" onClick={() => {
                    const confirm = window.confirm("Are you sure?")
                    if (confirm) {
                        this.props.handleDeleteQuote(this.state.quoteText)
                    }
                }}> Remove </button>
                {' '}
                <button className="btn btn-secondary btn-sm" onClick={this.handleEditClick}> Edit </button>
                <hr />
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.state.isClicked ? this.showForm() : this.showText()}
            </div>
        )
    }
}

export default ShowQuote;