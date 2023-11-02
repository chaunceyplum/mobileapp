import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Avatar } from '@rneui/themed'
import Bgimg from '../assets/bbblurry.svg'
import SvgUri from 'react-native-svg'
import Background from './Background'
// const bgimg = { uri: '../assets/bbblurry.svg' }
const Home = () => {
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={Background}
        resizeMode='cover'
        style={styles.Image}
      >
        {/* <Text style={styles.Text}>Home</Text> */}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    // position: 'absolute',
    // top: '0',
    // left: '0',
    // right: '0',
    // bottom: '0',
  },
  Text: {
    textAlign: 'center',
  },
  Image: {
    flex: '1',
    justifyContent: 'center',
  },
})

export default Home
