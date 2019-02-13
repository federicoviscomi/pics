import React from 'react';
import ReactDOM from 'react-dom';

class ImageList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const images = this.props.images.map((image) => {
            return <img src={image.urls.regular}/>;
        });
        return (
            <div>{images}</div>
        );
    }
}

export default ImageList;