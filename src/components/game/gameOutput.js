import React, { Component } from 'react';

export default class GameOutput extends Component {
    constructor(props){
        super(props);
    }

    render () {
        
    return (
        <div className='output-wrapper'>

            <div className='output-name'>
                <h2>{this.props.name}</h2>
            </div>

            <div className='output-text'>
                <p>{this.props.text}</p>
            </div>

        </div>
    )
    }
}