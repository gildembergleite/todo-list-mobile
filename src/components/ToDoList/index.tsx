import { View } from 'react-native'
import ItemList from './ItemList'
import styles from './styles'

export default function ToDoList() {
  return (
    <View style={styles.container}>
      <ItemList />
    </View>
  )
}