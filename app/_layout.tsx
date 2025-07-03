import { Stack } from 'expo-router'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '../tamagui.config'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Layout() {
  return (
    <SafeAreaProvider>
      <TamaguiProvider config={tamaguiConfig}>
        <Stack />
      </TamaguiProvider>
    </SafeAreaProvider>
  )
}
