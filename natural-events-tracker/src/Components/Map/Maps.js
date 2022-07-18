import React, { useState } from 'react';
import { LocationInfoBox } from '../LocationInfoBox/LocationInfoBox';
import { Map, Marker } from 'pigeon-maps';
import styles from './Maps.module.css';

export const Maps = ({ eventData }) => {
    const [locationInfo, setLocationInfo] = useState(null);
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 'wildfires' || ev.categories[0].id ==='volcanoes' || ev.categories[0].id ==='seaLakeIce') {
            return (
                <Marker
                    key={ev.id}
                    width={30}
                    anchor={[ev.geometry[0].coordinates[1], ev.geometry[0].coordinates[0]]} 
                    color={ev.categories[0].id === 'wildfires' ? 'red' : ev.categories[0].id === 'volcanoes' ? 'black' : 'blue'}   
                    onClick={() => {setLocationInfo({ id: ev.id, title: ev.title, isActive: true })} }     
                />
            )
        }
        return null;
    })
    return (
        <div className={styles.map}>
            <Map defaultCenter={[41.902782, 12.496366]} defaultZoom={5}>
                { markers }
            </Map>
            { locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}
