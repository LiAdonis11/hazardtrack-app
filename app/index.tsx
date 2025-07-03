import { Stack, useRouter } from 'expo-router'
import { Image, Input, Button, Text, YStack, XStack } from 'tamagui'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react-native'

export default function LoginScreen() {
  const router = useRouter()
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = () => {
    if (emailOrPhone && password) {
      alert('Login successful (placeholder)')
      router.push('/(tabs)')
    } else {
      alert('Please enter your credentials.')
    }
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <YStack
        f={1}
        jc="center"
        ai="center"
        px="$6"
        bg="#F5F5F5"
        space="$6"
      >
        {/* Logo Header */}
        <YStack ai="center">
          <Image
            source={{
              uri: 'https://img.icons8.com/color/96/fire-element.png',
            }}
            width={80}
            height={80}
            alt="HazardTrack"
          />
          <Text fontSize="$8" fontWeight="800">
            HazardTrack
          </Text>
          <Text color="$gray" textAlign="center">
            Report Fire Hazards in Tagudin
          </Text>
        </YStack>

        {/* Login Form */}
        <YStack space="$3" width="100%" mt="$2">
          <Input
            size="$4"
            placeholder="Email or Phone"
            value={emailOrPhone}
            onChangeText={setEmailOrPhone}
            keyboardType="email-address"
          />

         <YStack position="relative" width="100%">
            <Input
              size="$4"
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              width="100%"
              pr={45} // extra padding right to avoid overlapping with icon
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


          <Button size="$4" onPress={handleLogin}>
            Login
          </Button>
          <Button onPress={() => router.push('/report-form')} mt="$2"> 
            Go to Report Form (Dev)
          </Button>
          <Button mt="$2" variant='outlined' onPress={() => router.push('/my-reports')}>
            View Submitted Reports
          </Button>
        </YStack>

        {/* Footer */}
        <YStack space="$2" mt="$4" ai="center">
          <Text>Don't have an account?</Text>
          <Button
            size="$3"
            variant="outlined"
            onPress={() => router.push('/register')}
          >
            Register
          </Button>
        </YStack>
      </YStack>
    </>
  )
}
