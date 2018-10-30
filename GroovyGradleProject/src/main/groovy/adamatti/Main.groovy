package adamatti

import static adamatti.FizzBuzz.fizzBuzz

class Main {
    static void main(String [] args){
        15.times {
            println "${it} => ${fizzBuzz(it)}"
        }
    }
}
