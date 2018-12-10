function describe(definition, specFunction) {
    console.log(definition + specFunction())
}

function it(definition, testFunction) {
    return definition + testFunction
}

function Expect(method) {
    this.method = method;
}

Expect.prototype.isEqual = function(value) {

    return (value === this.method ? "Pass" : "Fail");

};

const expect = new Expect();