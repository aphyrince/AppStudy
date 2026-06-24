import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { cardsData } from '../data/cardData';
import { useRouter } from 'expo-router';

export default function CardSelection() {
    const [selectedCards, setSelectedCards] = useState<Card[]>([]);
    const router = useRouter();

    const handleSelectCard = (card: Card) => {
        if (selectedCards.includes(card)) return;

        const newSelectedCards = [...selectedCards, card];

        setSelectedCards(newSelectedCards);

        if (newSelectedCards.length === 3) {
            router.replace({
                pathname: '/result',
                params: { cards: JSON.stringify(newSelectedCards), from: 'cardSelection' },
            });
        }
    };

    const renderItem = ({ item }: { item: Card }) => (
        <TouchableOpacity key={item.id} onPress={() => handleSelectCard(item)}>
            <Image source={require('../assets/cards/card_back.png')} style={styles.cardImage} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text>운명을 밝힐 3장의 카드를 선택해 보세요.</Text>
            <FlatList
                data={cardsData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={4}
                contentContainerStyle={styles.cardsContainer}
            />
        </View>
    );
}

const cardWidth = Dimensions.get('window').width / 4 - 16;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        padding: 8,
    },
    instructions: {
        textAlign: 'center',
        marginVertical: 16,
        fontSize: 18,
        color: colors.text,
        fontFamily: fonts.regular,
    },
    cardsContainer: {
        alignItems: 'center',
    },
    cardImage: {
        width: cardWidth,
        height: cardWidth * 1.5,
        margin: 4,
    },
});
