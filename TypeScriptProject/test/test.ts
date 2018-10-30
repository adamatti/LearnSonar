import * as assert from 'assert';
import fizzBuzz from "../fizzBuzz";

describe('Test fizzBuzz', () => {
    it('Should return fizz', () => {
        assert.equal("Fizz",fizzBuzz(3))
    })

    it('Should return Buzz', () => {
        assert.equal("Buzz",fizzBuzz(5))
    })

    it('Should return FizzBuzz', () => {
        assert.equal("FizzBuzz",fizzBuzz(15))
    })
})