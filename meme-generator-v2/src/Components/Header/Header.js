import React from 'react'
import logo from '../../images/troll-face.png';

export const Header = () => {
    return (
        <header className='header'>
            <img className='header--image' src={logo} alt='troll face' />
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>React Example</h4>
        </header>
    )
}
