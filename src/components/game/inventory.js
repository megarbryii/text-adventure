import React from 'react';

export default function(props) {
    return(
        <div className='inventory-output'>
            <li key={props.id}>
                {props.name}
            </li>
        </div>
    )
}