import React from 'react';
import Die from './Die';

class Dice extends React.Component {    
    render() {
        return (
            <div>
                <Die id={0}/>
                <Die id={1}/>
                <Die id={2}/>
                <Die id={3}/>
                <Die id={4}/>
            </div>
        );
    }
}

export default Dice;