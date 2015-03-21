import { getColor } from '../src/string-to-color';
import chai from '../node_modules/chai/lib/chai';
var expect = chai.expect;

describe('StringToColor test suite',() => {
    describe('getColor', () => {
        it('returns the best color in the world', () => {
            expect(getColor).to.exist;
            expect(getColor('bestString')).to.be.equal('ff4e00');
        });
    });
});