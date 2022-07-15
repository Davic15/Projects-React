import { useState } from 'react'
import axios from 'axios';

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const BASE_URL_FORECAST = 'https://api.openweathermap.org/data/2.5/onecall';
const WEATHER_API = '0a56dc1de13ff9072d70706723096a71';

export const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const getCityId = async (location) => {
        try {
            const { data } = await axios(`${BASE_URL}`, {params: {q: location, units: 'metric', appid: WEATHER_API}})
            return data;
        } catch(err) {
            console.log(err);
            setError('There is no such location.');
            setLoading(false);
        }
    }

    const getWeatherData = async (location) => {
        try{
            const { data } = await axios(`${BASE_URL}`, {params: {id: location.id, units: 'metric', appid: WEATHER_API}})
            return data;
        } catch (err) {
            console.log(err)
            setError('Something went wrong');
            setLoading(false);
        }
    }

    const getNextDaysForecast = async (location) => {
        try {
            const { data } = await axios(`${BASE_URL_FORECAST}`, {params: {lon: location.coord.lon, lat: location.coord.lat, units: 'metric', appid: WEATHER_API}})
            console.log(data)
            return data;
        } catch (err) {
            console.log(err)
            setError('Something went wrong');
            setLoading(false);
        }
    }

    const gatherForecastData = (data, dataForecast) => {
        const currentDay = getCurrentDayForecast(data);
        const currentDayDetails = getCurrentDayDetailedForecast(data);
        const upcomingDays = getUpcomingDaysForecast(dataForecast);
        setForecast({ currentDay, currentDayDetails, upcomingDays });
        setLoading(false);
    }

    const submitRequest = async (location) => {
        setLoading(true);
        setError(false);
        const response = await getCityId(location);
        if(!response || response.length === 0) {
            return;
        }
        const data = await getWeatherData(response)
        if(!data) return;

        const dataForecast = await getNextDaysForecast(data)
        if(!dataForecast) return;

        console.log(data.main)
        console.log(data)
        gatherForecastData(data, dataForecast);
    }

    return {
        isError, isLoading, forecast, submitRequest
    };
}
