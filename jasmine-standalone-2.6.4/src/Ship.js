Ship.prototype = {
    
    getCurrentPort: function(){
        return this._currentPort;
    },
};

function Ship(port){
    this._currentPort = port;

};