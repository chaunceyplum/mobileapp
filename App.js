import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
// import DrawerNav from './Components/DrawerNav'
import { Button } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import Notifications from './Components/Notifications'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Setting from './Components/Setting'
import Login from './Components/Login'
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title='Go to notifications'
      />
    </View>
  )
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  )
}

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  )
}

const SettingScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  )
}

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer styles={styles.Container}>
      <Drawer.Navigator initialRouteName='Login'>
        <Drawer.Screen name='Login' component={Login} />
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Notifications' component={Notifications} />
        <Drawer.Screen name='Profile' component={Profile} />
        <Drawer.Screen name='Settings' component={Setting} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
  },
})
