import React, { Component } from 'react';

import GameOutput from '../game/gameOutput';
import Inventory from '../game/inventory';
import GameButton from '../game/gameButtons';

import textNodes from '../test/map';

var output;
var name;

const textNode = textNodes[textNodes.id]



export default class Game extends Component {
    constructor(props){
        super(props);

        this.state = {
           items: [],
           currentTextNode: []
        }
    }



    gameStart = () => {
        this.setState({ 
            items: {
                name: 'Paint can',
                paintCan: true
            },
            currentTextNode: textNodes[0] 
        }) 
    }

    showTextNode = (textNodeIndex) => {
        this.setState({ currentTextNode: textNodes[textNodeIndex] })
       
        output = this.state.currentTextNode.text;
        name = this.state.currentTextNode.name;
        
    }

    showOptionButtons = () => {
        console.log('button options state', this.state.currentTextNode.options);
        const choices = this.state.currentTextNode.options;
        choices.map((choice, index) => {
            return(
                <GameButton
                    key={index}
                    className={this.props.className}
                    onClick={this.props.onClick}
                    text={choice.text}
                />
            )
        })
    }
    
    
        
    selectOption = (option) => {
        const nextTextNodeId = option.nextText;
        if (nextTextNodeId === -1) {
            this.setState({
                items: [],
                currentTextNode: textNodes[0]
            });
            this.showTextNode(0);
        }
        this.showTextNode(nextTextNodeId);
    }

    showInventory = () => {
        console.log('inventory state', this.state.items)
    } 
    
    
    componentWillMount = () => {
        this.gameStart();
    }
    

    componentDidMount = () => {
        if(this.state.currentTextNode != []) {
            this.showTextNode(0);
        }
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
                        {this.showOptionButtons()}
                        <button  
                            className='btn' 
                            onClick={() => this.showTextNode(3)}>
                            Test
                        </button>
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