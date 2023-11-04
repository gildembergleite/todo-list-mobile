import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.to}>to</Text>
        <Text style={styles.do}>do</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor={'#808080'}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.textAddButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}