import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Input, Button, Divider } from 'react-native-elements'
import { StyleSheet } from 'react-native'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.mainView}>
      <View style={styles.nextView}>
        <Text style={styles.text}>Log In</Text>
        <View style={styles.container}>
          <Input
            style={styles.input}
            placeholder='Enter your email'
            label='Email'
            // leftIcon={{ type: 'material', name: 'email' }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            style={styles.input}
            placeholder='Enter your password'
            label='Password'
            // leftIcon={{ type: 'material', name: 'lock' }}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>
        <View style={styles.container}>
          <Button title='sign in' style={styles.button} />
          <Button title='register' style={styles.button} />
        </View>
      </View>
    </View>
  )
}

const formWidth = '80%'
const buttonWidth = '80%'
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
    // width: formWidth,
    justifyContent: 'center',
    justifySelf: 'center',
  },
  button: {
    width: 200,
    marginTop: 10,
    justifySelf: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 48,
    paddingTop: 20,
  },
  input: {
    // maxWidth: formWidth,
    textAlign: 'center',
  },
  mainView: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextView: {
    width: formWidth,
  },
})

export default Login
