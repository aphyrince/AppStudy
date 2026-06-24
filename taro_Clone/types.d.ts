interface Card {
    id: number;
    name: string;
    image: any;
    frontImage: any;
    description: string;
}

interface HistoryItem {
    id: string;
    userId: string;
    date: string;
    cards: Cards[];
}
