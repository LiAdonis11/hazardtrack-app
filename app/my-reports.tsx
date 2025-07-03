import { Stack } from 'expo-router'
import { YStack, Text, XStack, Image, Separator, ScrollView } from 'tamagui'
import { useState } from 'react'

export default function MyReportsScreen() {
    const [reports] = useState([
         {
      id: 1,
      category: 'Electrical',
      description: 'Exposed wiring near school',
      image: 'https://img.icons8.com/color/96/electrical.png',
      location: '16.9464, 120.4513',
      status: 'Pending',
      date: '2025-07-04',
    },
    {
      id: 2,
      category: 'Blocked Exit',
      description: 'Emergency exit blocked in warehouse',
      image: 'https://img.icons8.com/color/96/exit.png',
      location: '16.9450, 120.4520',
      status: 'Inspected',
      date: '2025-07-02',
    },
    ])

    return (
        <>
            <Stack.Screen options={{title: 'My Reports'}} />
            <ScrollView>
                <YStack f={1} p="$4" space="$4" bg="#fff">
                    <Text fontSize="$7" fontWeight="700">📊 My Hazard Reports</Text>

                    {reports.map((report) => (
                        <YStack
                            key={report.id}
                            p="$3"
                            borderWidth={1}
                            borderRadius="$4"
                            borderColor="$gray5"
                            bg="$gray2Light"
                            space="$2"
                        >
                            <XStack space="$3" ai="center">
                                <Image 
                                    source={{uri: report.image}}
                                    style={{width: 60, height: 60}}
                                    alt="Hazard"
                                />
                                <YStack>
                                    <Text fontWeight="700">{report.category}</Text>
                                    <Text color="$gray10" fontSize="$2">{report.date}</Text>
                                </YStack>
                            </XStack>
                            <Text>{report.description}</Text>
                            <Text color="$gray10">📍 {report.location}</Text>
                            <Text>Status: <Text color={report.status === 'Pending' ? 'orange' : 'green'}>{report.status}</Text></Text>
                        </YStack>
                    ))}
                    <Separator />

                </YStack>
            </ScrollView>
        </>
    )
}