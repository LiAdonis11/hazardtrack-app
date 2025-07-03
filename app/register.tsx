import { Stack, useRouter, router } from 'expo-router'
import { EyeOff, Eye } from 'lucide-react-native'
import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Input, Text, YStack, Image } from 'tamagui'


export default function RegisterScreen(){
    const [ name, setName ] = useState('') 
    const [ emailOrPhone, setEmailOrPhone ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ showPassword, setShowPassword ] = useState(false)
    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false)

    const handleRegister = () => {
        if (!name || !emailOrPhone || !password || !confirmPassword) {
            alert('All fields are required')
            return
        }

        if (password !== confirmPassword) {
            alert('Password do not match')
            return
        }
        //placeholder: connect to backend later
        alert('Account created successfully')
        router.push('/') //back to loginscreen after successfull registration
    }

    return (
        <>
            <Stack.Screen options={{title: 'Register'}} />
            <YStack f={1} jc="center" ai="center" px="$6" space="$5" bg="#f5f5f5">
                {/*Header*/}
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

                {/*register form*/}
                <YStack space="$3" width="100%">
                    <Input 
                        size="$4"
                        placeholder="Full Name"
                        value={name}
                        onChangeText={setName}
                    />
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
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                            width="100%"
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
                    <YStack position="relative" width="100%">
                        <Input 
                            size="$4"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry={!showConfirmPassword}
                            width="100%"
                            pr={45}
                        />
                         <Button
                            position="absolute"
                            right={10}
                            top={8}
                            size="$2"
                            chromeless
                            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? (
                                <EyeOff size={20} color="gray" />
                            ) : (
                                <Eye size={20} color="gray" />
                            )}
                        </Button>

                    </YStack>
                    <Button size="$4" onPress={handleRegister}>Register</Button>
                </YStack>

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }
})