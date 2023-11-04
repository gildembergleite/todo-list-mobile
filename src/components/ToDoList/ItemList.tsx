import { View } from 'react-native'
import { CheckBox } from '@rneui/themed'
import styles from './styles'
import DataServices from '../../services/DataServices'
import { useEffect, useState } from 'react'
import { Task } from '../../../data'

export default function ItemList() {
  const data = new DataServices()
  const [list, setList] = useState<Task[]>([])
  
  useEffect(() => {
    const tasks = data.listTasks()
    setList(tasks)
  }, [])

  function handleCheckTask(id: number) {
    data.markTaskAsCompleted(id)
    setList((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    )
  }

  return (
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
  )
}