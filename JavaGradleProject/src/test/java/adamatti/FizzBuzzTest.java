package adamatti;

import org.junit.Assert;
import org.junit.Test;

import static adamatti.FizzBuzz.fizzBuzz;

public class FizzBuzzTest {
    @Test
    public void testFizz(){
        Assert.assertEquals("Fizz", fizzBuzz(3));
    }

    @Test
    public void testBuzz(){
        Assert.assertEquals("Buzz", fizzBuzz(5));
    }

    @Test
    public void testFizzBuzz(){
        Assert.assertEquals("FizzBuzz", fizzBuzz(15));
    }
}
