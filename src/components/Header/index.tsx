import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useState } from 'react'

export default function Header() {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.to}>to</Text>
        <Text style={styles.do}>do</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[styles.textInput, isFocused && styles.focusedTextInput]}
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