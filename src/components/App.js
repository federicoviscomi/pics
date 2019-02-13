import React from "react";
import SearchBar from "./SearchBar";
import axios from 'axios';

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term);
        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID 9cfe0e0d766c4763b36a59dd0365e755a12e42792de9dd5a6214875c59e6da92'
            }
        }).then(() => {

        });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;
