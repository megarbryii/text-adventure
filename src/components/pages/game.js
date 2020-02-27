import React, { Component } from 'react';

import GameOutput from '../game/gameOutput';

import textNodes from '../test/map';

var output;
var name;

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
            items: [
                {
                    name: 'Can of paint',
                    paintCan: true
                }
            ],
            currentTextNode: [] 
        })
        console.log('Game start: ', this.state.currentTextNode);
    }

    showTextNode = (textNodeIndex) => {
        this.setState({ currentTextNode: textNodes[textNodeIndex] })
       
        output = this.state.currentTextNode.text;
        name = this.state.currentTextNode.name;
        console.log('Show text node: ', this.state.currentTextNode);
    }

  
    componentWillMount = () => {
        
        this.showTextNode(0);
        console.log('Component Will Mount Inventory: ', this.state.items);
        console.log('Component Will Mount TextNode:', this.state.currentTextNode.options);
        
    }
    

    componentDidMount = () => {
        
        if(this.state.currentTextNode != []) {
            this.showTextNode(0);
        }
        console.log('Component Did Mount TextNode: ', this.state.currentTextNode);
    }

    componentDidUpdate = () => {
        if(this.state.currentTextNode != this.state.currentTextNode) {
            this.setState({ currentTextNode: this.state.currentTextNode});
            this.showTextNode(this.state.currentTextNode);
            name = this.state.currentTextNode.name;
            output = this.state.currentTextNode.text;
        }
        console.log('Component did update: ', this.state.currentTextNode);
    }

    

    render(){
        
        const showButtons = this.state.currentTextNode.options.map((option, index) => {
            console.log('Render from variable showButtons: ', this.state.currentTextNode.options);
            return (
                <button 
                    key={index}
                    className='btn'
                    onClick={() => this.showTextNode(option.nextText)}
                >
                    {option.text}
                </button>
            )
        })

        const showInventory = this.state.items.map(item => {
            if(this.state.items != []) {
                return (
                    <li key={item.name}>
                        {item.name}
                    </li>
                )
            }
        })

        return(
            <div className='game-wrapper'>
                <div className='left-side'>
                    {console.log('Game output name: ',this.state.currentTextNode.name)}
                    {console.log('Game output text: ', this.state.currentTextNode.text)}
                    <GameOutput 
                        name={name}
                        text={output}
                    />
        

                    <div className='btn-output'>
                        {showButtons}
                    </div>
      
                </div>

                <div className='right-side'>
                    

                    <div className='game-inventory'>
                        <h2>Inventory</h2>
                    </div>

                    <div className='inventory-output'>
                    {console.log('Inventory from render: ', this.state.items)}
                    
                        <ul>
                         {showInventory}       
                        </ul>
                    
                    </div>
                </div>



            </div>
        )
    }
}