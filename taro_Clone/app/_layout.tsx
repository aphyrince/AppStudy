import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name='login' />
            <Stack.Screen name='signIn' />
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen name='cardSelection' />
            <Stack.Screen name='result' />
        </Stack>
    );
}
