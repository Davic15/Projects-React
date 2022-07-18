import React, { useEffect, useState } from 'react'
import { Maps } from './Components/Map/Maps'
import { Header } from './Components/Header/Header';
import { Loader } from './Components/Loader/Loader';

export const App = () => {

  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events');
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    }
    fetchEvents();
  }, [])

  return (
    <div>
      <Header />
      { !loading ? <Maps eventData={eventData} /> : <Loader /> }
    </div>
  )
}
