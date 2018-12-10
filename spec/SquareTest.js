// describe("Square", function(){
//     var square = new Square(2);
//     console.log(square);
//
//     it('Gives correct area', function () {
//         expect(square.area()).toEqual(4);
//     });
//
//     it('It doesn\'t give wrong area', function () {
//         expect(square.area()).toEqual(2);
//     });
//
// });

var square = new Square(2);
console.log(Expect(square.area())).isEqual(2);
// console.log(expect(square.area()));