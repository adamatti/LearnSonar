package adamatti;

public class FizzBuzz {
    static String fizzBuzz(int number){
        StringBuffer sb = new StringBuffer();

        if (number % 3 == 0) sb.append("Fizz");
        if (number % 5 == 0) sb.append("Buzz");
        if (sb.length() == 0) sb.append(number);

        return sb.toString();
    }
}
