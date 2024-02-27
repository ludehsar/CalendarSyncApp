import React, { FC, useEffect, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Screen, Text } from "app/components"
import { colors, typography } from "app/theme"
import { daysOfWeek, months } from "app/utils/constants"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const requestRef = useRef<number>()

  const animate = () => {
    setCurrentDate(new Date())
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current || Number())
  }, [])

  return (
    <Screen preset="scroll" contentContainerStyle={$root}>
      <Text tx="common.logo" style={$title} preset="heading" />
      <View style={$buttonContainer}>
        <Button
          preset="default"
          style={$todayButton}
          textStyle={$todayButtonText}
          pressedStyle={$todayButtonPressed}
          tx="homeScreen.today"
        />
        <Button
          preset="default"
          style={$calendarButton}
          textStyle={$calendarButtonText}
          pressedStyle={$calendarButtonPressed}
          tx="homeScreen.calendar"
        />
      </View>
      <Text style={$dayOfWeek} preset="formLabel">
        {daysOfWeek[currentDate.getDay()]}
      </Text>
      <View style={$timeContainer}>
        <View style={$localTimeContainer}>
          <Text style={$time} preset="heading">
            {currentDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
          </Text>
          <Text style={$month} preset="subheading">
            {months[currentDate.getMonth()]}
          </Text>
        </View>
        <View style={$otherTimeContainer}>
          <View>
            <Text style={$otherTime} preset="bold">
              {currentDate.toLocaleTimeString("en-US", {
                timeZone: "America/New_York",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
            <Text style={$otherTimeLabel} preset="formHelper" tx="homeScreen.newYork" />
          </View>
          <View>
            <Text style={$otherTime} preset="bold">
              {currentDate.toLocaleTimeString("en-US", {
                timeZone: "Europe/London",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
            <Text style={$otherTimeLabel} preset="formHelper" tx="homeScreen.uk" />
          </View>
        </View>
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  margin: 8,
}

const $title: TextStyle = {
  marginTop: 52,
  marginBottom: 20,
  fontFamily: typography.secondary?.medium,
  fontSize: 42,
  letterSpacing: 1.2,
}

const $buttonContainer: ViewStyle = {
  flexDirection: "row",
  gap: 16,
  marginBottom: 28,
}

const $button: ViewStyle = {
  paddingHorizontal: 48,
  borderRadius: 50,
}

const $buttonText: TextStyle = {
  fontFamily: typography.primary.medium,
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

const $dayOfWeek: TextStyle = {
  fontSize: 24,
  fontWeight: "500",
  fontFamily: typography.secondary?.medium,
}

const $timeContainer: ViewStyle = {
  flexDirection: "row",
  gap: 24,
  // marginVertical: 16,
  alignItems: "center",
}

const $localTimeContainer: ViewStyle = {
  borderRightWidth: 0.7,
  paddingRight: 22,
  paddingVertical: 8,
}

const $time: TextStyle = {
  fontSize: 84,
  fontWeight: "700",
  fontFamily: typography.secondary?.medium,
  letterSpacing: 1.2,
  lineHeight: 120,
}

const $month: TextStyle = {
  fontSize: 84,
  fontWeight: "500",
  fontFamily: typography.secondary?.medium,
  letterSpacing: 1.2,
  lineHeight: 80,
}

const $otherTimeContainer: ViewStyle = {
  gap: 24,
}

const $otherTime: TextStyle = {
  fontSize: 32,
  fontWeight: "500",
  fontFamily: typography.secondary?.medium,
  lineHeight: 32,
}

const $otherTimeLabel: TextStyle = {
  fontSize: 18,
  fontFamily: typography.secondary?.medium,
}
