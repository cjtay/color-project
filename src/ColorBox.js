import React, { Component } from 'react';

import './Colorbox.css';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div
                style={{ backgroundColor: this.props.background }}
                className="ColorBox"
            >
                <span>{this.props.name}</span>
                <span>More</span>
            </div>
        );
    }
}

export default ColorBox;
