Weather.prototype = {
    isStormy: function(){
        return (Math.random() < this._NOT_STORMY_PROBABILITY);
    },
};

function Weather(){
    this._NOT_STORMY_PROBABILITY = 0.5;
};