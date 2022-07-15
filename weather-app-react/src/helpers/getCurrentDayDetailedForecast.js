const currentDayForecast = data => [
    {
        name: 'feels like', 
        value: Math.round(data.main.feels_like),
        unit: '°C'
    },
    {
        name: 'humidity',
        value: parseInt(data.main.humidity),
        unit: '%'
    },
    {
        name: 'wind',
        value: data.wind.speed,
        unit: 'm/s'
    },
    {
        name: 'air pressure',
        value: data.main.pressure,
        unit: 'mb'
    },
    {
        name: 'max temp',
        value: Math.round(data.main.temp_max),
        unit: '°C'
    },
    {
        name: 'min temp',
        value: Math.round(data.main.temp_min),
        unit: '°C'
    }
];

export default currentDayForecast;