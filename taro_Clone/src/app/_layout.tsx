import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../hooks/useAuth';

export default function RootLayout() {
    const router = useRouter();
    const { user, initializing } = useAuth();

    useEffect(() => {
        if (initializing) return;

        if (!user) router.replace('/login');
        else router.replace('/(tabs)');
    }, [initializing, router, user]);

    if (initializing) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color='#0000ff' />
            </View>
        );
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='login' />
            <Stack.Screen name='signIn' />
            <Stack.Screen name='(tabs)' />
            <Stack.Screen name='cardSelection' />
            <Stack.Screen name='result' />
        </Stack>
    );
}
