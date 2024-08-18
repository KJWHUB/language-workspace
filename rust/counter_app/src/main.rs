use std::io;

fn main() {
    let mut counter = 0;

    loop {
        println!("Current counter: {}", counter);
        println!("Enter 'inc' to increase, 'reset' to reset, or 'exit' to quit:");

        let mut input = String::new();
        io::stdin().read_line(&mut input).expect("Failed to read input");

        match input.trim() {
            "inc" => {
                counter += 1;
                println!("Counter increased!");
            }
            "reset" => {
                counter = 0;
                println!("Counter reset!");
            }
            "exit" => {
                println!("Exiting...");
                break;
            }
            _ => {
                println!("Invalid input, please try again.");
            }
        }
    }
}
