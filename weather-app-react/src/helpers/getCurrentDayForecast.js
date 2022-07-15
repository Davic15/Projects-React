const ICON_WEATHER_URL = 'http://openweathermap.org/img/wn/';

const getCurrentDayForecast = (data) => {
    const date = new Date (data.dt * 1000)
    return({
        currentWeekday: date.toLocaleString('en-US', { weekday: 'long' }),
        todaysFullDate: date.toLocaleString('en-US', { month: 'long', day: 'numeric' }),
        locationName: data.name,
        todaysImgUrl: `${ICON_WEATHER_URL}/${data.weather[0].icon}@2x.png`,
        todaysTemp: Math.round(data.main.temp),
        weatherState: data.weather[0].description,
    })
}

export default getCurrentDayForecast;