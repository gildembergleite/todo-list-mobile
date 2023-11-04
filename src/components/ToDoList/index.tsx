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

  async function handleDeleteTask(taskId: number) {
    await data.deleteTask(taskId)
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
            textStyle={{
              color: task.isCompleted ? '#808080' : '#FFFFFF',
              fontWeight: '400',
              textDecorationLine: task.isCompleted ? 'line-through' : 'none'
            }}
          />
          <Icon
            brand
            color="#808080"
            name="delete-forever"
            onPress={() => handleDeleteTask(task.id)}
            size={20}
            style={{ padding: 5 }}
          />
        </View>
      ))}
    </View>
  )
}
