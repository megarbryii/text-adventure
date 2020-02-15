import React, { Component } from 'react';

import GameOutput from '../game/gameOutput';
import Inventory from '../game/inventory';

import textNodes from '../test/map';
import inventory from '../game/inventory';

var output;
var name;





export default class Game extends Component {
    constructor(props){
        super(props);

        this.state ={
           items: [] ,
           currentTextNode: []
        }
    }



    gameStart = () => {
        this.setState({
           items: [],
           currentTextNode: []
        })

        this.showTextNode(4);  
    }

    showTextNode = (textNodeIndex) => {
        const textNode = textNodes.filter(el => textNodes.id === textNodeIndex);
        output = textNode.text;
        name = textNode.name;

        
          

        return textNodeIndex;
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

        
        this.gameStart();

        return(
            <div className='game-wrapper'>
                <div className='left-side'>

                    <GameOutput 
                        name={name}
                        text={output}
                    />

                    <div className='btn-output'>
                        
                    </div>
      
                </div>

                <div className='right-side'>
                    

                    <div className='game-inventory'>
                        <h3>Inventory</h3>
                    </div>

                    <div className='inventory-output'>
                        <ul>
                            
                        </ul>
                    </div>
                </div>



            </div>
        )
    }
}