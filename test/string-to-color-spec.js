describe('StringToColor test suite', function () {

    import getColor from 'src/string-to-color;

    describe('getColor', function () {
        it('is correct', function () {
            expect(getColor()).to.exist;
            expect(getColor('testString')).to.be.equal('ff422a');
        });
    });
});