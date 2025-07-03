import { Stack } from 'expo-router'
import { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Input, Text, YStack, TextArea, Label, Image, Select } from 'tamagui' 
import * as Location from 'expo-location'
import * as ImagePicker from 'expo-image-picker'



export default function ReportFormScreen() {
    const [ image, setImage ] = useState<string | null>(null)
    const [ location, setLocation ] = useState<string | null>(null) 
    const [ description, setDescription ] = useState('')
    const [ category, setCategory ] = useState('Electrical')

    //gps location
    const getLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            alert('Location permission denied')
            return
        }

        const loc = await Location.getCurrentPositionAsync({})
        const coords = `${loc.coords.latitude}, ${loc.coords.longitude} `
        setLocation(coords)
    }

    //pick an image
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.7,
            base64: true,
        })

        if(!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    const handleSubmit = () => {
        if (!image || !description || !location || !category) {
            alert("All fields are required!")
            return
        }
        alert("Report Submitted successfully!")
    }

    return (
        <>
            <Stack.Screen options={{title: 'Report Hazard'}}/>
            <YStack f={1} px="$5" pt="$6" space="$4" bg="#fff">
                <Text fontSize="$8" fontWeight="700">📝 Report a Fire Hazard</Text>

                <YStack space="$2">
                {/*Image Picker*/}
                <Label>Hazard Photo</Label>
                {image && (
                    <Image 
                        source={{ uri: image }}
                        style={{ width: '100%', height: 200, borderRadius: 8 }}
                        alt="Hazard Image"
                    />
                )}
                <Button onPress={pickImage}>Pick Image</Button>
                </YStack>
            

                {/*GPS location*/}
                <YStack space="$2">
                    <Label>Location</Label>
                    <Input
                        placeholder="Tap to get location"  
                        value={location ?? ''}  
                        onFocus={getLocation}
                        editable={false}
                    />
                </YStack>

                {/*hazard category*/}
                <YStack space="$2">
                    <Label>Hazard Category</Label>
                    <Select value={category} onValueChange={setCategory}>
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Item index={0} value="Electrical"/>
                            <Select.Item index={1} value="LPG Refill"/>
                            <Select.Item index={2} value="Blocked Exit"/>
                            <Select.Item index={3} value="Flammable Items"/>
                            <Select.Item index={4} value="Others"/>
                        </Select.Content>
                    </Select>
                </YStack>
                {/*Description*/}
                <YStack space="$2">
                    <Label>Description</Label>
                    <TextArea 
                        size="$4"
                        placeholder='Describe the fire hazard...'
                        value={description}
                        onChangeText={setDescription}
                        numberOfLines={4}
                    />
                </YStack>

                {/*submit button*/}
                <Button mt="$4" onPress={handleSubmit}>
                    Submit Report
                </Button>
            </YStack>
        </>
    )
}