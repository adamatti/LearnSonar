package adamatti;

import static adamatti.FizzBuzz.fizzBuzz;

public class Main {
    public static void main(String [] args){
        for(int i = 1; i <= 15 ; i ++ ) {
            System.out.println(i + " => " + fizzBuzz(i));
        }
    }
}