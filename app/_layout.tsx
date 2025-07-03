import { Stack } from 'expo-router'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '../tamagui.config'

export default function Layout() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Stack />
    </TamaguiProvider>
  )
}
