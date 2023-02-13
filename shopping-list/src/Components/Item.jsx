import React from 'react'

export const Item = ({item, onRemoveItem}) => {
    return (
        <li>
            {item}
            <button className='delete' onClick={ () => onRemoveItem(item) }>x</button>
        </li>
    )
}
