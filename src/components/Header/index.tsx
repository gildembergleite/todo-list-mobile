import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useState } from 'react'
import DataServices from '../../services/DataServices'

interface HeaderProps {
  data: DataServices
  onGetData: Function
}

export default function Header({ data, onGetData }: HeaderProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [taskName, setTaskName] = useState('')

  async function handleAddTask(taskName: string) {
    setTaskName('')
    await data.addTask(taskName)
    await onGetData()
  }

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
          value={taskName}
          onChangeText={(taskName) => setTaskName(taskName)}
          style={[styles.textInput, isFocused && styles.focusedTextInput]}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor={'#808080'}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => handleAddTask(taskName)}>
          <Text style={styles.textAddButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}