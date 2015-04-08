describe("romanNumeral", function() {
    it("should return 'I' for an input value of 1", function() {
        expect(romanNumeral(1)).to.equal('I');
    });

    it("should return 'II' for an input value of 2", function() {
        expect(romanNumeral(2)).to.equal('II');
    });

    it("should return 'III' for an input value of 3", function() {
        expect(romanNumeral(3)).to.equal('III');
    });

    it("should return 'IV' for an input value of 4", function() {
        expect(romanNumeral(4)).to.equal('IV');
    });
});
