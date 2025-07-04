import { Stack, useFocusEffect } from 'expo-router'
import { YStack, Text, XStack, Image, Separator, ScrollView } from 'tamagui'
import { useState, useCallback } from 'react'
import { getReports } from '../lib/data'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function MyReportsScreen() {
  const [reports, setReports] = useState<any[]>([])

  // Load fresh data when screen is focused
  useFocusEffect(
    useCallback(() => {
        const loadReports = async () => {
            const stored = await AsyncStorage.getItem('hazardReports')
            if (stored) {
                setReports(JSON.parse(stored))
            }
        }
      loadReports()
    }, [])
  )

  return (
    <>
      <Stack.Screen options={{ title: 'My Reports' }} />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <YStack p="$4" space="$4" bg="#fff">
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
                    source={{ uri: report.image }}
                    style={{ width: 60, height: 60 }}
                    alt="Hazard"
                  />
                  <YStack>
                    <Text fontWeight="700">{report.category}</Text>
                    <Text color="$gray10" fontSize="$2">{report.date}</Text>
                  </YStack>
                </XStack>
                <Text>{report.description}</Text>
                <Text color="$gray10">📍 {report.location}</Text>
                <Text>
                  Status:{' '}
                  <Text color={report.status === 'Pending' ? 'orange' : 'green'}>
                    {report.status}
                  </Text>
                </Text>
              </YStack>
            ))}
            <Separator />
          </YStack>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
