import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: {
                    backgroundColor: '#333',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#333',
                },
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'index',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name='History'
                options={{
                    title: 'History',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'information-circle' : 'information-circle-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
