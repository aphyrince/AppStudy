import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useFocusEffect, useRouter } from 'expo-router';
import { getReadings } from '../../services/database';
import { formatDate } from '../../utils/dateUtils';
import { cardImages } from '../../assets/card';

export default function History() {
    const router = useRouter();
    const [readings, setReadings] = useState<HistoryItem[]>([]);

    useFocusEffect(() => {
        const fetchReadings = async () => {
            const data = await getReadings();
            setReadings(data);
        };
        fetchReadings();
    });

    const renderItem = ({ item }: { item: HistoryItem }) => (
        <TouchableOpacity
            key={item.id}
            style={styles.itemContainer}
            onPress={() =>
                router.navigate({
                    pathname: '/result',
                    params: { cards: JSON.stringify(item.cards), from: 'history' },
                })
            }
        >
            <Text style={styles.date}>{formatDate(item.date)}</Text>
            {item.cards.map((card) => (
                <View key={card.id} style={styles.cardItem}>
                    <Image source={cardImages[card.id as keyof typeof cardImages]} style={styles.cardPreview} />
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>{card.name}</Text>
                        <Text style={styles.cardDescription}>{card.description}</Text>
                    </View>
                </View>
            ))}
            <Text style={styles.more}>더보기</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList data={readings} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        padding: 16,
        paddingTop: 80,
    },
    itemContainer: {
        marginBottom: 16,
        padding: 12,
        borderRadius: 8,
        backgroundColor: colors.secondary,
        elevation: 2,
    },
    date: {
        fontSize: 16,
        marginBottom: 8,
        color: colors.text,
        fontFamily: fonts.medium,
    },
    cardItem: {
        flexDirection: 'row',
        marginBottom: 12,
        backgroundColor: colors.text,
        borderRadius: 10,
        padding: 8,
    },
    cardPreview: {
        width: 80,
        height: 110,
        marginRight: 12,
    },
    cardInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.text,
        fontFamily: fonts.medium,
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: 14,
        color: colors.text,
        fontFamily: fonts.regular,
    },
    more: {
        marginTop: 8,
        fontWeight: '700',
        textAlign: 'right',
        color: colors.accent,
        fontFamily: fonts.medium,
    },
});
