Port.prototype = {
    getWeather: function(){
        return this._weather;
    },
};

function Port(weather){
    this._weather = weather;
};