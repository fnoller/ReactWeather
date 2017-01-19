import axios from 'axios';

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=a85153475ce13cfeaa4a0dbed73445b7&units=metric";

export default {
    getTemp: function(location) {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl)
            .then((
                res)=>{
                    if (res.data.cod && res.data.message) {
                        throw new Error(res.data.message);
                    } else {
                        return res.data.main.temp;
                    }
                },
                (res)=>{
                    throw new Error(res.data.message);
                });
    }
}