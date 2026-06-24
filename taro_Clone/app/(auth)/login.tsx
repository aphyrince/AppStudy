import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { signIn } from '../../services/auth';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

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
        <View style={styles.container}>
            <Text style={styles.title}>로그인</Text>
            <TextInput
                style={styles.input}
                keyboardType='email-address'
                autoCapitalize='none'
                textContentType='emailAddress'
                placeholder='your@email.com'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                textContentType='password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <Pressable style={styles.button} onPress={handleLogin}>
                <Text>로그인</Text>
            </Pressable>
            <Pressable style={[styles.link, styles.button]} onPress={() => router.navigate('/signUp')}>
                <Text>회원가입</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        padding: 16,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 700,
        color: colors.text,
        fontFamily: fonts.medium,
        textAlign: 'center',
        marginBottom: 24,
    },
    input: {
        marginBottom: 16,
        borderColor: colors.secondary,
        padding: 4,
        borderWidth: 2,
    },
    button: { marginTop: 8, backgroundColor: colors.third },
    link: { marginTop: 16, alignSelf: 'center' },
});
