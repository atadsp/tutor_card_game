import readline from "readline";
import deck from "./deck";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class GameService {
    public StartNewGame(){
        const currentDeck = deck.GenerateDeck();
        rl.question("What is your name ? ", (name) => {
            rl.question("Where do you live ? ", (country) => {
                console.log(`${name}, is a citizen of ${country}`);
                rl.close();
            });
        });
    }

}

export default new GameService();
