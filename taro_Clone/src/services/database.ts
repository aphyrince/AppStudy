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

const getReadings = async () => {
    const user = auth.currentUser;
    if (user) {
        const q = query(collection(db, 'history'), where('userid', '==', user.uid));
        const querySnapshot = await getDocs(q);

        const historyData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        console.log(historyData);
        return historyData;
    }
    return [];
};

export { saveReading, getReadings };
