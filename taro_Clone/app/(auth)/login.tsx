import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function Login() {
    const router = useRouter();

    return (
        <View>
            <Text>login</Text>
            <TextInput />
            <TextInput />
            <Button title='Go to About' onPress={() => router.navigate('/(tabs)')} />
        </View>
    );
}

const styles = StyleSheet.create({});
