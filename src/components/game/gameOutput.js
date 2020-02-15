import React, { Component } from 'react';

export default class GameOutput extends Component {

    render () {
    return (
        <div className='output-wrapper'>

            <div className='output-name'>
                <h2>{props.name}</h2>
            </div>

            <div className='output-text'>
                <p>{props.text}</p>
            </div>

        </div>
    )
    }
}