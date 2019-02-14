import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import axios from "axios";
import unsplash from '../api/unsplash';

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
