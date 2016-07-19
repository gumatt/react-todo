var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4df55bf44c50fab78c830564945169eb&units=imperial';


// 4df55bf44c50fab78c830564945169eb
// http://api.openweathermap.org/data/2.5/weather
module.exports = {
    getTemp: function (location) {
        var encodedLoc = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLoc}`;

        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}
