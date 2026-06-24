import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useMemo } from 'react';
import { useLocalSearchParams } from 'expo-router';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { saveReading } from '../services/database';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.6;

export default function Result() {
    const { cards, from } = useLocalSearchParams<{ cards: string; from: string }>();
    const selectedCards: Card[] = useMemo(() => (cards ? JSON.parse(cards) : []), [cards]);

    useEffect(() => {
        if (from === 'cardSelection') {
            saveReading(selectedCards);
        }
    }, [from, selectedCards]);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>타로 결과</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardsContainer}>
                {selectedCards.map((card) => (
                    <View style={styles.cardWrapper} key={card.id}>
                        <Image source={card.frontImage} style={styles.cardImage} />
                        <Text style={styles.cardName}>{card.name}</Text>
                        <Text style={styles.cardDescription} numberOfLines={2}>
                            {card.description}
                        </Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.overallResult}>
                <Text style={styles.overallTitle}>통합 점괘</Text>
                <Text style={styles.overallDescription}>
                    {/* 통합 점괘 결과를 여기에 표시합니다 */}
                    통합 점괘 내용이 여기에 들어갑니다. 내용이 길어져도 스크롤하여 볼 수 있습니다. 추가적인 정보나
                    설명을 여기에 계속해서 작성할 수 있습니다.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingVertical: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 16,
        color: colors.text,
        fontFamily: fonts.medium,
    },
    cardsContainer: {
        paddingHorizontal: 16,
    },
    cardWrapper: {
        width: cardWidth,
        marginRight: 16,
        backgroundColor: colors.secondary,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 2,
        padding: 12,
        alignItems: 'center',
    },
    cardImage: {
        width: '100%',
        height: cardWidth * 1.5,
        borderRadius: 8,
        marginBottom: 8,
    },
    cardName: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.text,
        fontFamily: fonts.medium,
        marginBottom: 4,
        textAlign: 'center',
    },
    cardDescription: {
        fontSize: 14,
        color: colors.text,
        fontFamily: fonts.regular,
        textAlign: 'center',
    },
    overallResult: {
        marginTop: 24,
        paddingHorizontal: 16,
    },
    overallTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 8,
        color: colors.primary,
        fontFamily: fonts.medium,
        textAlign: 'center',
    },
    overallDescription: {
        fontSize: 16,
        color: colors.text,
        fontFamily: fonts.regular,
        textAlign: 'left',
        lineHeight: 22,
    },
});
