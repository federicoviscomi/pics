import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import axios from "axios";

const unsplash =  axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9cfe0e0d766c4763b36a59dd0365e755a12e42792de9dd5a6214875c59e6da92'
    }
});

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {images: []};
    }

    onSearchSubmit = async (term) => {
        console.log(term);
        const response = await unsplash.get('/search/photos', {params: {query: term}});
        console.log(this);
        this.setState({images: response.data.results});
    };

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;
