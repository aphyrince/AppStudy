import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen name='login' options={{ title: 'Login' }} />
            <Stack.Screen name='signIn' options={{ title: 'sign in' }} />
            <Stack.Screen name='cardSelection' options={{ headerShown: false }} />
            <Stack.Screen name='result' options={{ title: 'result' }} />
        </Stack>
    );
}
