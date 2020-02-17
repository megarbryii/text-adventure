import React, { Component } from 'react';

export default class GameButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button
                    key={this.props.index}
                    className='btn'
                    onClick={() => this.selectOption()}
                >
                {this.props.text}
            </button>
        )
    }
}