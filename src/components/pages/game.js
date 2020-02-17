import React, { Component } from 'react';

import GameOutput from '../game/gameOutput';
import Inventory from '../game/inventory';
import GameButton from '../game/gameButtons';

import textNodes from '../test/map';

var output;
var name;

const textNode = textNodes.filter(textNode => textNodes.id === textNodes[textNodes.id]);



export default class Game extends Component {
    constructor(props){
        super(props);

        this.state = {
           items: [],
           currentTextNode: []
        }
    }



    gameStart = () => {
        this.setState({ items: [] })
        this.setState({ currentTextNode: textNodes[4] })
        this.showTextNode(4);  
    }

    showTextNode = (textNodeIndex) => {
        console.log('Current state', this.state.currentTextNode)
        this.setState({ currentTextNode: textNodes[textNodeIndex] })
       
        output = this.state.currentTextNode.text;
        name = this.state.currentTextNode.name;
        console.log('Updated state', this.state.currentTextNode)
    }

    showOptionButton = (option) => {
        console.log('option state', this.state.currentTextNode.options);
        this.state.currentTextNode.options.map(index => {
            <GameButton key={index}
            text={index.text}
        />
        })
        
    }
    
    
        
    selectOption = (option) => {
        const nextTextNodeId = option.nextText;
        if (nextTextNodeId === -1) {
            this.gameStart();
        }
        this.showTextNode(nextTextNodeId);
    }
    

    showInventory = () => {
        this.state.items.map(item => {
            return(
                <Inventory
                    key={item.id}
                    name={item.name}
                />
            )
        })
    } 
    
    componentWillMount = () => {
        this.gameStart();
 
    }

    componentDidUpdate = () => {
        
    }



    render(){
        

        return(
            <div className='game-wrapper'>
                <div className='left-side'>

                    <GameOutput 
                        name={name}
                        text={output}
                    />
        

                    <div className='btn-output'>
                        {this.showOptionButton()}
                    </div>
      
                </div>

                <div className='right-side'>
                    

                    <div className='game-inventory'>
                        <h2>Inventory</h2>
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