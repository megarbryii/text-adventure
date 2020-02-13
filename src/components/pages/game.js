import React, { Component } from 'react';

import textNodes from '../test/map';

let output = [];





export default class Game extends Component {
    constructor(props){
        super(props);

        this.state ={
           items: [] ,
           currentTextNode: "get I get here"
        }
    }



    gameStart = () => {
        this.setState = ({
           items: []
        });

        this.showTextNode(4);  
    }

    showTextNode = (textNodeIndex) => {
        const textNode = textNodes[textNodeIndex];
        this.setState = ({
            currentTextNode: textNode
        }, () => {
            console.log(this.state.currentTextNode, ": current text node")
        })
        output = textNode.text;
        return textNodeIndex;
    }

    optionButtons = (textNodeIndex) => {
        const textNode = textNodes[textNodeIndex];
        textNode.options.map(option => {
            
                return (
                    <button 
                    key={option.id}
                    className='btn'
                    onClick={() => this.selectOption(option)}>
                        {option.text}
                    </button>
                )  
        })
    }

    showOption = (option) => {
        return option.requiredState == null || option.requiredState(state);
    }

    selectOption = (option) => {
        const nextTextNodeId = option.nextText;
        if (nextTextNodeId === -1) {
            this.gameStart();
        }
        this.showTextNode(nextTextNodeId);
    }

    showInventory = () => {
        inventory.map(item, index => {
            return(
                <li key={index}>
                    {item.name}
                </li>
            )
        })
    }

    render(){

        const inventory = this.state.items;
        this.gameStart();

        return(
            <div className='game-wrapper'>
                <div className='left-side'>
                    <div className='game-room-name'>
                        <h2>{this.state.currentTextNode.name}</h2>
                    </div>

                    <div className='game-output'>
                        <p style={{ whiteSpace: 'pre-line' }}>{output}</p>
                    </div>

                    <div className='btn-output'>
                        {this.optionButtons}
                    </div>
      
                </div>

                <div className='right-side'>
                    

                    <div className='game-inventory'>
                        <h3>Inventory</h3>
                    </div>

                    <div className='inventory-output'>
                        <ul>
                            {this.showInventory}
                        </ul>
                    </div>
                </div>



            </div>
        )
    }
}