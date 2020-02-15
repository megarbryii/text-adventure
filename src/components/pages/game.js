import React, { Component } from 'react';

import GameOutput from '../game/gameOutput';
import Inventory from '../game/inventory';

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
        
        this.showTextNode(4);  
    }

    showTextNode = (textNodeIndex) => {
        this.setState({ currentTextNode: textNode })
       
        output = this.state.currentTextNode.text;
        name = this.state.currentTextNode.name;

        
          

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
        this.setState({
            items: [],
            currentTextNode: textNodes[4]
         })

         console.log("current state", this.state.currentTextNode)
 
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