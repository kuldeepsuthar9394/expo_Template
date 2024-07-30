import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'

const ProfileScreen = () => {
  const item = useLocalSearchParams()
  const { Name, Age } = useLocalSearchParams()
  return (
    <View>
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={() => router.canGoBack() && router.back()} style={{ width: 150, height: 50, borderRadius: 10, justifyContent: "center", alignItems: "center", backgroundColor: "green" }}>
        <Text>Log In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen