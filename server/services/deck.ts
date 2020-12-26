import cards from "../data/cards.json";
type cards = keyof typeof cards;

class DeckService {
    public GenerateDeck(): any[]{
        const cardsObject = (cards as any);
        const keys = Object.keys(cardsObject);
        let deck: string[] = [];

        return this.GetRandomCard(cardsObject, keys, deck);
    }

    private GetRandomCard(cardsObject: any, keys: string[], deck: string[]):  string[]{
        if(keys.length > 0){
            const chosenKey = keys[Math.floor(Math.random() * keys.length)];
            const card = cardsObject[chosenKey];
            const count = this.GetOccurrence(deck, chosenKey);

            if(count < card.count){
                console.log(chosenKey, count);
                deck.push(chosenKey);
                this.GetRandomCard(cardsObject, keys, deck);
            } else {
                const index = keys.indexOf(chosenKey);
                if (index > -1) {
                    keys.splice(index, 1);
                }
                this.GetRandomCard(cardsObject, keys, deck);
            }
        } else {
            return deck;
        }
        return deck;
    }

    private GetOccurrence(array: string[], value: string) {
        let count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
    }

}

export default new DeckService();
