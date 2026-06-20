import { View, Text } from 'react-native';
import React from 'react';

export default function index() {
    const apiURL = process.env.EXPO_PUBLIC_API_URL;

    return (
        <View>
            <Text>{apiURL}</Text>
        </View>
    );
}
