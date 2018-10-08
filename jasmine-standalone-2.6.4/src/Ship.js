Ship.prototype = {

    getCurrentPort: function(){
        return this._currentPort;
    },
    setSail: function(){
        if(this.getCurrentPort().getWeather().isStormy()){
            throw new Error("Cannot set sail in stormy weather");
        }
        
        this._currentPort = null;
    },
    dock: function(arrivalPort){
        return this._currentPort = arrivalPort;
    },
};

function Ship(port){
    this._currentPort = port;

};