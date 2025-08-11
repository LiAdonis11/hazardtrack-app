// app/index.tsx
import { Stack } from 'expo-router'
import { YStack, Text, Button } from 'tamagui'
import { Link } from 'expo-router'

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <YStack f={1} jc="center" ai="center" p="$4">
        <Text fontSize="$8" fontWeight="bold">Welcome to HazardTrack</Text>
        <Text mt="$2" color="$gray10">Your safety companion</Text>

        <Link href="/(auth)/login" asChild>
          <Button mt="$4">Login</Button>
        </Link>

        <Link href="/(auth)/register" asChild>
          <Button mt="$2" theme="alt2">Register</Button>
        </Link>
      </YStack>
    </>
  )
}
