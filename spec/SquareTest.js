describe("Square", function(){
    var square = new Square(2);

    it('Gives correct area', function () {
        expect(square.area()).toEqual(4);
    });

    it('It doesn\'t give wrong area', function () {
        expect(square.area()).toEqual(2);
    });

});