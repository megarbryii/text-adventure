import React, { Component } from 'react';

import GameOutput from '../game/gameOutput';
import Inventory from '../game/inventory';

import textNodes from '../test/map';
import inventory from '../game/inventory';

let output = [];





export default class Game extends Component {
    constructor(props){
        super(props);

        this.state ={
           items: [] ,
           currentTextNode: []
        }
    }



    gameStart = () => {
        this.setState = ({
           items: [],
           currentTextNode: []
        });

        this.showTextNode(4);  
    }

    showTextNode = (textNodeIndex) => {
        const textNode = textNodes[textNodeIndex];
        this.setState = ({
            currentTextNode: textNode
        })
        console.log(this.state.currentTextNode, ": current text node")
        output = this.state.currentTextNode.text;
        return textNodeIndex;
    }

    optionButtons = (textNodeIndex) => {
        const textNode = textNodes[textNodeIndex];
        textNode.options.map(option => {
            if (this.showOption(option)) {
            return (
                <button 
                key={option.id}
                className='btn'
                onClick={() => this.selectOption(option)}>
                    {option.text}
                </button>
            )}  
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
        inventory.map(item => {
            return(
                <Inventory
                    key={inventory.id}
                    name={inventory.name}
                />
            )
        })
    }

    render(){

        const inventory = this.state.items;
        this.gameStart();

        return(
            <div className='game-wrapper'>
                <div className='left-side'>

                    <GameOutput 
                        name={this.state.currentTextNode.name}
                        text={this.state.currentTextNode.text}
                    />

                    <div className='btn-output'>
                        {this.optionButtons()}
                    </div>
      
                </div>

                <div className='right-side'>
                    

                    <div className='game-inventory'>
                        <h3>Inventory</h3>
                    </div>

                    <div className='inventory-output'>
                        <ul>
                            {this.showInventory()}
                        </ul>
                    </div>
                </div>



            </div>
        )
    }
}