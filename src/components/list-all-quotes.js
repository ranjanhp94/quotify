import React from 'react';

class ListAllQuotes extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.state = {
            editMode: false,
            quoteText: '',
            quoteAuthor: ''
        }
        console.log(this.props.listquote);
    }

    handleDelete(e){
        let id = e.target.id;
        this.props.handleDeleteQuote(id)
    }
    
    handleChangeText(e){
        this.setState({
            quoteText: e.target.value
        }) 
    }

    handleChangeAuthor(e){
        this.setState({
            quoteAuthor: e.target.value
        })
    }

    handleUpdate(){
     this.setState({
         quoteText: this.state.quoteText,
         quoteAuthor: this.state.quoteAuthor
     })
    }

    showForm(quote) {
        return (
            <div>   
                <form> 
                    <textarea type = "textarea" name="quoteText" onChange={this.handleChangeText} value = {quote.quoteText} cols = "20" rows = "5"></textarea><br/>
                    <input type="text" name="quoteAuthor" onChange={this.handleChangeAuthor} value = {quote.quoteAuthor}></input><br/><br/>
                    <button type = "submit" onClick = {this.handleUpdate}>Update</button>
                    <button onClick = {this.handleCancel}>Cancel</button>
                </form>
            </div>
        )
    }

    showText(quote) {
        return (
            <div>
                <h2>"{quote.quoteText}"</h2>
                <h3>~{quote.quoteAuthor}</h3>
                <hr />
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.props.listquote.map((quote,index) => (
                    <div key = {index}>
                        { this.state.editMode ? this.showForm(quote) : this.showText(quote) }
                        <button id = {index} onClick={() => {
                            this.setState(prevState => ({
                                editMode: !prevState.editMode
                            }))
                        }}>Edit</button>
                        <button id = {index} onClick={this.handleDelete}>Delete</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default ListAllQuotes;