import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import Header from '../../components/Header'
import styles from './styles'
import StatusBar from '../../components/StatusBar'
import ToDoList from '../../components/ToDoList'

export default function Home() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />
        <StatusBar />
        <ToDoList />
      </View>
    </TouchableWithoutFeedback>
  )
}