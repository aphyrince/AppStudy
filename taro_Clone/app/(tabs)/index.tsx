import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { signOut } from '../../services/auth';
import { useRouter } from 'expo-router';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default function Main() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut();
        } catch (error: any) {
            alert(error.message);
            Alert.alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>타로 앱</Text>
            <Pressable style={styles.button} onPress={() => router.navigate('/cardSelection')}>
                <Text>타로 점보기 시작</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.link]} onPress={handleLogout}>
                <Text>로그아웃</Text>
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
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 700,
        marginBottom: 24,
        color: colors.text,
        fontFamily: fonts.medium,
    },
    button: {
        marginTop: 8,
        backgroundColor: colors.third,
    },
    link: {
        marginTop: 16,
    },
});
