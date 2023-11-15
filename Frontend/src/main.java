public class Main {

        public static void main(String[] args) {
            int n = 10; // Change this value to get a different number of Fibonacci numbers
            int[] fibSequence = generateFibonacci(n);
    
            System.out.print("The first " + n + " Fibonacci numbers are: ");
            for (int i = 0; i < n; i++) {
                System.out.print(fibSequence[i] + " ");
            }
        }
    
        public static int[] generateFibonacci(int n) {
            int[] fibSequence = new int[n];
            fibSequence[0] = 0;
            fibSequence[1] = 1;
    
            for (int i = 2; i < n; i++) {
                fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
            }
    
            return fibSequence;
        }
    }
    
    

