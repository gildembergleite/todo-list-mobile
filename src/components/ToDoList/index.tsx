import { View } from 'react-native'
import { CheckBox, Icon } from '@rneui/themed'
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
      {list.map((task) => (
        <View key={task.id} style={styles.content}>
          <CheckBox
            onPress={() => handleCheckTask(task.id)}
            containerStyle={styles.checkBox}
            title={task.description}
            checked={task.isCompleted}
          />
          <Icon
            brand
            color="#808080"
            name="delete-forever"
            onPress={() => console.log('onPress()')}
            size={20}
          />
        </View>
      ))}
    </View>
  )
}
