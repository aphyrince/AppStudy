import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

export default function Result() {
    const { cards, from } = useLocalSearchParams<{ cards: string; from: string }>();

    const selectedCards = cards ? JSON.parse(cards) : [];

    return (
        <View>
            <Text>Result</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
