import { Stack, SplashScreen } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="NewImage" options={{ headerShown : false, gestureEnabled: false }} />
        </Stack>
    )
}

export default RootLayout