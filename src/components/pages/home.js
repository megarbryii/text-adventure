import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
    return(
        <div className='home-wrapper'>
            <h1>Welcome to Prison Escape!</h1>

            <p>This is an old fashioned text adventure game where you are trying to escape a county jail cell and 
                make a break for freedom.
            </p>

            <p>The instructions are simple.  You just need to type in your commands in the box at the bottom of the
                game screen in a two word fashion, such as "go north" or "use key".
            </p>

            <p>The commands that are available are the following:</p>

            <ul>
                <li>Go + a direction (for this game, they are north, south, east, and west)</li>
                <li>Look + room, person, or item - used to examine something in the game</li>
                <li>Take + item - used to try to take an item if possible</li>
                <li>Use + item - to use an item</li>
                <li>Direction - see what directions are available</li>
                <li>Inventory - see what items you have in your current posession</li>
                <li>Help - gives a list of available commands</li>
            </ul>

            <p>On computers and most tablets, you will have the availabe directions and your Inventory
                displayed on the screen on your right hand side.  With the mobile version those will not be
                available... You would have to type in the "direction" or the "inventory" command at the bottom
                of the screen.
            </p>

            <p>Good luck!  And have fun escaping your prison!</p>

            <div className='nav-link-wrapper home-game'>
                <Link to='/game'>Go to the game here</Link>
            </div>

        </div>
    )
}