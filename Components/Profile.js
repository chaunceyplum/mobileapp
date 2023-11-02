import { Avatar } from '@rneui/themed'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const Profile = () => {
  return (
    <View style={styles.Container}>
      {/* <Text style={styles.Text}>Profile</Text> */}
      <Avatar
        size={244}
        rounded
        source={{ uri: 'https://randomuser.me/api/portraits/men/47.jpg' }}
        avatarStyle={styles.Avatar}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  Container: {
    marginTop: '15%',
    justifyContent: 'center',
    alignItems: 'center',

    display: 'flex',
  },
  Text: {
    textAlign: 'center',
  },
  Avatar: {
    justifyItem: 'center',
    alignSelf: 'center',
  },
})

export default Profile
