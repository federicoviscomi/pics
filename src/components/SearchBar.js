import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: undefined};
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        // not let the form submit itself and refresh the page
        // keep the browser from submitting the form automatically
        event.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label>Image search</label>
                        <input type="text"
                               value={this.state.term}
                               onChange={event => this.setState({term: event.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;