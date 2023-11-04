import { View } from 'react-native'
import { CheckBox } from '@rneui/themed'
import styles from './styles'
import { Task } from '../../../data'
import DataServices from '../../services/DataServices'

interface ToDoListProps {
  data: DataServices
  list: Task[]
  onGetData: Function
}

export default function ToDoList({ list, data, onGetData }: ToDoListProps) {
  
  async function handleCheckTask(taskId: number) {
    await data.markTaskAsCompleted(taskId)
    await onGetData()
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {list.map((task) => (
          <CheckBox
            key={task.id}
            onPress={() => handleCheckTask(task.id)}
            containerStyle={styles.checkBox}
            title={task.description}
            checked={task.isCompleted}
          />
        ))}
      </View>
    </View>
  )
}