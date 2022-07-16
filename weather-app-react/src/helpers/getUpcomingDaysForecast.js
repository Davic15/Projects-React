const ICON_WEATHER_URL = 'http://openweathermap.org/img/wn/';

const getUpcomingDaysForecast = (data) => {
    return (
        data.daily.slice(1).map(day => ({
            imgUrl: `${ICON_WEATHER_URL}/${day.weather[0].icon}@2x.png`,
            maxTemp: Math.round(day.temp.max),
            weekDay: new Date(day.dt * 1000).toLocaleString('en-GB', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}).substring(0, 3)
        }))
    )
}

export default getUpcomingDaysForecast;