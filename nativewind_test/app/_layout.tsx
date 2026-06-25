import '@/global.css';
import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function RootLayout() {
    return (
        <View className='bg-amber-500'>
            <Text>Hello!</Text>
        </View>
    );
}
