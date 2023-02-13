import React from 'react'

export const Menu = ({ onSelectedVideo, videoValues }) => {
    return (
        <form onClick={ (e) => onSelectedVideo(e.target.value) }>
            {videoValues.map((value, i) => (
                <div className='video-inputs'>
                    <input key={i} type='radio' name='src' value={value} />
                    {value}
                </div>
            ))}
        </form>
    )
}
