import { Stack } from 'expo-router'
import { View, StyleSheet  } from 'react-native'
import { Input, Button, Text, YStack} from 'tamagui'

export default function LoginScreen() {
    return (
        <>
            <Stack.Screen options={{title: 'Login'}} />
            <View style={styles.container}>
                <YStack space="$4" w="80%">
                    <Text fontSize="$4" fontWeight="bold">
                        Welcome to HazardTrack 👮‍♂️
                    </Text>
                    <Input placeholder='Email or Phone' size="$4" />
                    <Input placeholder='Password' size="$4" secureTextEntry/>

                    <Button size="$4">Login</Button>
                    <Text color="$gray10">Don't have an account? Sign Up</Text>
                </YStack>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})