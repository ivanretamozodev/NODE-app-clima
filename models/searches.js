const axios = require('axios');

class Searches {
    history = [];
    constructor() {}

    get paramsMapBox() {
        return {
            access_token:
                'pk.eyJ1IjoiaXZhbjE0NDQ1IiwiYSI6ImNsY2FzNWQxbjB4NGQzcWxoMm43dXAwNXUifQ.b7moUVblSLtUZLhaDtFP2g',
            limit: 5,
            language: 'en'
        };
    }

    async city(place = '') {
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
                params: this.paramsMapBox
            });

            const response = await instance.get();

            console.log(response.data);
        } catch (error) {
            return [];
        }
    }
}

module.exports = Searches;
