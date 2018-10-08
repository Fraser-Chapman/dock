Ship.prototype = {

    getCurrentPort: function(){
        return this._currentPort;
    },
    setSail: function(){
        return this._currentPort = null;
    },
    dock: function(arrivalPort){
        return this._currentPort = arrivalPort;
    },
};

function Ship(port){
    this._currentPort = port;

};