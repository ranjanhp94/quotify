import React from 'react';

class AddQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteText: '',
            quoteAuthor: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleAdd(e) {
        e.preventDefault();
        let quote = {
            quoteText: this.state.quoteText,
            quoteAuthor: this.state.quoteAuthor
        }
        this.props.addQuote(quote)
    }

    render() {
        return (
            <form>
                <textarea onChange={this.handleChange}
                    name="quoteText"
                    placeholder="Add quote"
                    cols="50"
                    rows="5">
                </textarea>
                <br />
                <input type="text" onChange={this.handleChange} name="quoteAuthor" placeholder="Add author"></input><br /><br />
                <button className="btn btn-success" onClick={this.handleAdd}>Add Quote</button>{' '}
                <button className="btn btn-secondary" type="reset" value="reset">Reset</button>
            </form>
        )
    }
}

export default AddQuote;