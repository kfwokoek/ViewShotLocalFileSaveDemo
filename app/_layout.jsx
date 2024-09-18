import { Stack, SplashScreen } from 'expo-router'
import { StatusBar } from "expo-status-bar";
import { useEffect } from 'react';


const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown : false, gestureEnabled: false }} />
            <Stack.Screen name="(pages)" options={{ headerShown : false, gestureEnabled: false }} />
        </Stack>
    )
}

export default RootLayout