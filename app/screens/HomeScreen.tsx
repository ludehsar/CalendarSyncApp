import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Screen, Text } from "app/components"
import { colors, typography } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen preset="scroll" contentContainerStyle={$root}>
      <Text text="Cal Sync" style={$title} preset="bold" />
      <View style={$buttonContainer}>
        <Button preset="default" style={$todayButton} textStyle={$todayButtonText} pressedStyle={$todayButtonPressed}>Today</Button>
        <Button preset="default" style={$calendarButton} textStyle={$calendarButtonText} pressedStyle={$calendarButtonPressed}>Calendar</Button>
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  margin: 8
}

const $title: TextStyle = {
  marginTop: 40,
  fontFamily: typography.secondary?.medium,
  fontSize: 42,
  letterSpacing: 1.6,
  lineHeight: 96,
}

const $buttonContainer: ViewStyle = {
  flexDirection: 'row',
  gap: 16
}

const $button: ViewStyle = {
  paddingHorizontal: 48,
  borderRadius: 50,
}

const $buttonText: TextStyle = {
  fontFamily: typography.primary.medium
}

const $todayButton: ViewStyle = {
  ...$button,
  backgroundColor: colors.palette.neutral900,
}

const $todayButtonPressed: ViewStyle = {
  ...$button,
  backgroundColor: colors.palette.neutral800,
}

const $todayButtonText: TextStyle = {
  ...$buttonText,
  color: colors.palette.neutral100,
}

const $calendarButton: ViewStyle = {
  ...$button,
  backgroundColor: colors.palette.neutral500,
  borderWidth: 0.7,
  borderColor: colors.border,
}

const $calendarButtonPressed: ViewStyle = {
  ...$button,
  backgroundColor: colors.palette.neutral600,
}

const $calendarButtonText: TextStyle = {
  ...$buttonText,
  color: colors.palette.neutral900,
}
