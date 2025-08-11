import { Stack, router } from 'expo-router'
import { YStack, Input, Button, Text, Image } from 'tamagui'
import { useState } from 'react'
import { Alert } from 'react-native'
import { Eye, EyeOff } from 'lucide-react-native'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'All fields are required.')
      return
    }

    try {
      const response = await fetch('http://192.168.254.183/hazardtrack/api/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (data.success) {
        Alert.alert('Success', data.message)
        router.replace('/(user)/home') // Replace with your user home screen
      } else {
        Alert.alert('Error', data.message)
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong.')
    }
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <YStack f={1} jc="center" ai="center" px="$6" space="$5" bg="#f5f5f5">
        {/* Header */}
        <YStack ai="center" space="$2">
          <Image
            source={{ uri: 'https://img.icons8.com/color/96/fire-element.png' }}
            width={70}
            height={70}
            alt="hazardTrack"
          />
          <Text fontSize="$8" fontWeight="800">Login</Text>
          <Text textAlign="center" color="$gray10">Welcome back to HazardTrack</Text>
        </YStack>

        {/* Form */}
        <YStack space="$3" width="100%">
          <Input
            size="$4"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <YStack position="relative" width="100%">
            <Input
              size="$4"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              pr={45}
            />
            <Button
              position="absolute"
              right={10}
              top={8}
              size="$2"
              chromeless
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={20} color="gray" />
              ) : (
                <Eye size={20} color="gray" />
              )}
            </Button>
          </YStack>

          <Button size="$4" onPress={handleLogin}>Login</Button>
        </YStack>

        {/* Footer */}
        <YStack mt="$4" ai="center">
          <Text>Don't have an account?</Text>
          <Button mt="$2" size="$3" variant="outlined" onPress={() => router.push('/(auth)/register')}>
            Go to Register
          </Button>
        </YStack>
      </YStack>
    </>
  )
}
