import React, { Component } from 'react';

class Img extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="img-holder">
                <h2>{this.props.title}</h2>
                <p>This is details of Image  </p>
                <img src={this.props.src} alt="" />
            </div>
        )
    }
}

export default Img;