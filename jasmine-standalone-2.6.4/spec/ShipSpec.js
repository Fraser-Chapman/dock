describe('Ship', function () {
    let port;
    let ship;
    let arrivalPort;
    let weather;

    beforeEach(function(){
        port = new Port(weather);
        ship = new Ship(port);
        arrivalPort = new Port();
        weather = new Weather();
    });
    it ('has a port', function() {
        expect(ship.getCurrentPort()).toBe(port);
    });
    it ("can set sail from the port", function(){
        spyOn(weather, "isStormy").and.returnValue(false);
        ship.setSail();

        expect(ship.getCurrentPort()).toBeFalsy();
    });
    it ("can dock at port", function(){
        ship.dock(arrivalPort);

        expect(ship.getCurrentPort()).toBe(arrivalPort);
    });
    it("doesn't set sail in stormy weather", function(){
        spyOn(weather, "isStormy").and.returnValue(true);

        expect(function () {
            ship.setSail();
        }).toThrowError("Cannot set sail in stormy weather");
    });
});