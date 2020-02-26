import React, { Component } from 'react';

import GameOutput from '../game/gameOutput';
import Inventory from '../game/inventory';

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
            items: [],
            currentTextNode: [] 
        })
        this.showTextNode(0);
    }

    showTextNode = (textNodeIndex) => {
        this.setState({ currentTextNode: textNodes[textNodeIndex] })
       
        output = this.state.currentTextNode.text;
        name = this.state.currentTextNode.name;
        
    }

        
    selectOption = (option) => {
        const nextTextNodeId = this.state.currentTextNode.options.nextText;
        if (nextTextNodeId === -1) {
            this.setState({
                items: [],
                currentTextNode: []
            });
            this.showTextNode(0);
        }
        this.showTextNode(nextTextNodeId);
    }
  
    componentWillMount = () => {
        this.gameStart();
        console.log('Component Will Mount Inventory: ', this.state.items);
        console.log('Component Will Mount TextNode:', this.state.currentTextNode.options);
        
    }
    

    componentDidMount = () => {
        if(this.state.currentTextNode != []) {
            this.showTextNode(0);
        }
        console.log('Component Did Mount TextNode: ', this.state.currentTextNode.options);
    }

    componentDidUpdate = () => {
        
    }

    

    render(){
        
        const showButtons = this.state.currentTextNode.options.map(option => {
            console.log('Render from variable showButtons: ', this.state.currentTextNode.options);
            return (
                <button 
                    key={option.text}
                    className='btn'
                    onClick={this.selectOption}
                >
                    {option.text}
                </button>
            )
        })

        const showInventory = this.state.items.map(item => {
            return (
                <li key={item.name}>
                    {item.name}
                </li>
            )
        })

        return(
            <div className='game-wrapper'>
                <div className='left-side'>

                    <GameOutput 
                        name={name}
                        text={output}
                    />
        

                    <div className='btn-output'>
                        {showButtons}
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
                            {console.log('Inventory from render: ', this.state.items)}
                            if (this.state.items != []) {
                                showInventory
                            }
                        </ul>
                    </div>
                </div>



            </div>
        )
    }
}