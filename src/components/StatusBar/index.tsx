import { Text, View } from 'react-native'
import styles from './style'

export default function StatusBar() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.countContainer}>
          <Text style={styles.created}>Criadas</Text>
          <Text style={styles.count}>0</Text>
        </View>
        <View style={styles.countContainer}>
          <Text style={styles.concluded}>Concluídas</Text>
          <Text style={styles.count}>0</Text>
        </View>
      </View>
    </View>
  )
}