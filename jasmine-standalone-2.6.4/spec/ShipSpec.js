describe('Ship', function () {
    let port;
    let ship;
    let arrivalPort;

    beforeEach(function(){
        port = new Port();
        ship = new Ship(port);
        arrivalPort = new Port();
    });
    it ('has a port', function() {
        expect(ship.getCurrentPort()).toBe(port);
    });
    it ("can set sail from the port", function(){
        ship.setSail();

        expect(ship.getCurrentPort()).toBeFalsy();
    });
    it ("can dock at port", function(){
        ship.dock(arrivalPort);

        expect(ship.getCurrentPort()).toBe(arrivalPort);
    });
});