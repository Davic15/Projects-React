import React from 'react'
import Load from 'react-js-loader';

export const Loader = () => {

    return (
        <div>
            <Load type="hourglass" bgColor={"#f95959"} title={"Fetching Data"} color={'#e3e3e3'} size={100} />
        </div>
    )
}
