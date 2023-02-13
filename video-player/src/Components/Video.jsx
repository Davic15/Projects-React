import React from 'react'

export const Video = ({ videoSrc }) => {
    return (
        <div>
            <video loop controls autostart='true' autoPlay muted src={videoSrc} />
        </div>
    )
}
