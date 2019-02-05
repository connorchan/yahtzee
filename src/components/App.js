import React from 'react';
import Game from './Game';

class App extends React.Component {
    render() {
        return (
            <div className="dice">
                <Game />
            </div>
        );
    }
}

export default App;