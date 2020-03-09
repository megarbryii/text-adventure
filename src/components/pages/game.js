import React, { Component } from 'react';

import GameOutput from '../game/gameOutput';

import Rooms from '../test/Rooms/rooms';

export default class Game extends Component{
    constructor() {
        super();

        this.state = {
            currentRoom: {}
        }
    }

    gameStart = () => {
        this.showRoom(0);
    }

    showRoom = (room) => {
        this.setState({
            currentRoom: Rooms[room]
        })
    }

    componentWillMount = () => {
        this.gameStart();
    }
    

    render(){
        const { name, description, options } = this.state.currentRoom;

        const showButtons = options.map(option => {
            if(option.nextRoom === -1) {
                return (
                    <button
                    key={option.id}
                    className='btn-lose'
                    onClick={() => this.gameStart()}
                >
                    {option.text}
                </button>
                )
            } else if(option.nextRoom === -2) {
                return (
                    <button
                    key={option.id}
                    className='btn-win'
                    onClick={() => this.gameStart()}
                >
                    {option.text}
                </button>
                )
            } else {
                return(
                    <button
                        key={option.id}
                        className='btn'
                        onClick={() => this.showRoom(option.nextRoom)}
                    >
                        {option.text}
                    </button>
                )
            }   
        })
        
        return(
            <div className='game-wrapper'>
                <div className='left-side'>
                    <GameOutput 
                        name={name}
                        text={description}
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
                    
                    
                        <ul>
                            
                        </ul>
                    
                    </div>
                </div>



            </div>
        )
    }
}