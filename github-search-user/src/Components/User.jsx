import React from 'react'

export const User = ({ avatar, url, username }) => {
    return (
        <div className='user'>
            <img src={avatar} alt='profile' width='50' height='50' />
            <a href={url} target='_blank' rel='noopener noreferrer'>
                {username}
            </a>
        </div>
    )
}
