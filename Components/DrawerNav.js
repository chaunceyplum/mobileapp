import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Home'
import Notifications from './Notifications'

const Drawer = createDrawerNavigator()

const MyDrawer = () => {
  return (
    <Drawer.Navigator style={styles.Container}>
      <Drawer.Screen name='Home' component={Home} style={styles.Text} />
      <Drawer.Screen name='Notification' component={Notifications} />
    </Drawer.Navigator>
  )
}
const styles = StyleSheet.create({
  Container: {
    // marginTop: '50%',
    textAlign: 'center',
    backgroundColor: 'black !important',
    color: 'white',
  },
  Text: {
    textAlign: 'center',
  },
})
