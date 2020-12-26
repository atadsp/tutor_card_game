import cards from "../data/cards.json";
type cards = keyof typeof cards;

class DeckService {
    public GenerateDeck(): any[]{
        const deck:any[] = [];
        const cardsObject = (cards as any);

        this.GetRandomCard(deck, cardsObject)

        return deck;

    }

    public GetRandomCard(deck: any[], cardsObject: any): any{
        const keys = Object.keys(cardsObject);
        const chosenKey = keys[Math.floor(Math.random() * keys.length)];
        const card = cardsObject[chosenKey];
        console.log(card);
        return card
    }

}

export default new DeckService();
