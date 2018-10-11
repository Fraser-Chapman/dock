describe('Port', function(){
    let weather;
    let port;
    let ship;

    beforeEach(function(){
        weather = new Weather();
        port = new Port(weather);
        ship = new Ship(port);
    });
    it("has weather", function(){
        expect(port.getWeather()).toBe(weather)
    });
    it("can add ships", function(){
        port.addShip();

        expect(port.getShips()).toContain(ship);
    })

});