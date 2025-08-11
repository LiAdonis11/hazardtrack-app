import { Stack, router } from 'expo-router'
import { Eye, EyeOff } from 'lucide-react-native'
import { useState } from 'react'
import { Alert, View } from 'react-native'
import { YStack, Input, Button, Text, Image } from 'tamagui'

export default function RegisterScreen() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'All fields are required.')
      return
    }

    try {
      const response = await fetch('http://192.168.254.183/hazardtrack/api/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await response.json()

      if (data.success) {
        Alert.alert('Success', data.message)
        router.push('/(auth)/login') // Go to login screen after success
      } else {
        Alert.alert('Error', data.message)
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong.')
    }
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Register' }} />
      <YStack f={1} jc="center" ai="center" px="$6" space="$5" bg="#f5f5f5">
        {/* Header */}
        <YStack ai="center" space="$2">
          <Image
            source={{
              uri: 'https://img.icons8.com/color/96/fire-element.png',
            }}
            width={70}
            height={70}
            alt="hazardTrack"
          />
          <Text fontSize="$8" fontWeight="800">Register</Text>
          <Text textAlign="center" color="$gray10">Create your HazardTrack account</Text>
        </YStack>

        {/* Form */}
        <YStack space="$3" width="100%">
          <Input
            size="$4"
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />
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

          <Button size="$4" onPress={handleRegister}>Register</Button>
        </YStack>

        {/* Footer */}
        <YStack mt="$4" ai="center">
          <Text>Already have an account?</Text>
          <Button mt="$2" size="$3" variant="outlined" onPress={() => router.back()}>
            Back to Login
          </Button>
        </YStack>
      </YStack>
    </>
  )
}
