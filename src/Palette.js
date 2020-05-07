import React, { Component } from 'react';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Palette">
                {/* nav bar */}
                <div className="Palette-colors">{/* color boxes */}</div>
                {/* footer  */}
            </div>
        );
    }
}

export default Palette;
