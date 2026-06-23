import { Stack, useRouter } from 'expo-router';
import { auth } from '../services/firebase';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { ActivityIndicator, View } from 'react-native';

export default function RootLayout() {
    const router = useRouter();
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (initializing) setInitializing(false);
        });
        return unsubscribe;
    }, [initializing]);

    useEffect(() => {
        if (initializing) return;

        if (!user) {
            router.replace('/login');
        } else {
            router.replace('/(tabs)');
        }
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
