// app/login.tsx
import { Stack, useRouter, router } from 'expo-router'
import { View, StyleSheet } from 'react-native'
import { Input, Button, Text, YStack } from 'tamagui'

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <View style={styles.container}>
        <YStack space="$4" width="80%">
          <Text fontSize="$6" fontWeight="bold">Welcome to HazardTrack 👮‍♂️</Text>

          <Input placeholder="Email or Phone" size="$4" />
          <Input placeholder="Password" size="$4" secureTextEntry />

          <Button size="$4">Login</Button>

          <Button theme="gray" onPress={() => router.push('/register')}>
            Don't have an account? Register

          </Button>
        </YStack>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
