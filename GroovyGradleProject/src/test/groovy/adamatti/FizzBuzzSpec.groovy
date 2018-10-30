package adamatti

import spock.lang.Specification
import spock.lang.Unroll

import static adamatti.FizzBuzz.fizzBuzz

class FizzBuzzSpec extends Specification {
    @Unroll
    def "test fizzBuzz"(){
        expect:
            fizzBuzz(x) == expected
        where:
             x | expected
             3 | "Fizz"
             5 | "Buzz"
            15 | "FizzBuzz"

    }
}
