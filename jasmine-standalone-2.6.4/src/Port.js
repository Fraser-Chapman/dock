Port.prototype = {
    getWeather: function(){
        return this._weather;
    },
    addShip: function(ship){
        this._ships.push(ship);
    },
    getShips: function(){
        return this._ships;
    },
};

function Port(weather){
    this._weather = weather;
    this._ships = [];
};