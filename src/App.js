import React, { Component } from 'react';

import Palette from './Palette';
import seedColors from './seedColors';
import { generatedPalette } from './colorHelpers';

class App extends Component {
    render() {
        console.log(generatedPalette(seedColors[4]));
        return (
            <div>
                <Palette palette={generatedPalette(seedColors[4])} />;
            </div>
        );
    }
}

export default App;
