import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { signIn } from '../../services/auth';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const result = await signIn(email, password);
        if (result.success === 200) router.replace('/(tabs)');
        else Alert.alert('로그인 실패!');
    };

    return (
        <View>
            <Text>로그인</Text>
            <TextInput
                keyboardType='email-address'
                autoCapitalize='none'
                textContentType='emailAddress'
                placeholder='your@email.com'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                textContentType='password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <Button title='로그인' onPress={handleLogin} />
            <Button title='회원가입' onPress={() => router.navigate('/signIn')} />
        </View>
    );
}

const styles = StyleSheet.create({});
