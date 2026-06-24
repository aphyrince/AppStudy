import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db, auth } from './firebase';

const saveReading = async (cards: Card[]) => {
    const user = auth.currentUser;
    if (user) {
        await addDoc(collection(db, 'history'), {
            userId: user.uid,
            cards: cards.map((card) => ({
                id: card.id,
                name: card.name,
                description: card.description,
                frontImage: card.frontImage,
            })),
            date: new Date().toISOString(),
        });
    }
};

const getReadings = async (): Promise<HistoryItem[]> => {
    const user = auth.currentUser;
    if (!user) return [];

    const q = query(collection(db, 'history'), where('userId', '==', user.uid));
    const querySnapshot = await getDocs(q);

    const historyData: HistoryItem[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            id: doc.id,
            userId: data.userId,
            date: data.date,
            cards: data.cards as Card[],
        };
    });

    console.log(historyData);
    return historyData;
};

export { saveReading, getReadings };
