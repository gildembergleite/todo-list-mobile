import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import Header from '../../components/Header'
import styles from './styles'
import StatusBar from '../../components/StatusBar'
import ToDoList from '../../components/ToDoList'
import { useEffect, useState } from 'react'
import DataServices from '../../services/DataServices'
import { Task } from '../../../data'

export default function Home() {
  const data = new DataServices()
  const [list, setList] = useState<Task[]>([])
  
  useEffect(() => { getData() }, [])

  async function getData() {
    const tasks = await data.listTasks()
    setList([...tasks])
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header data={data} onGetData={getData} />
        <StatusBar />
        <ToDoList data={data} list={list} onGetData={getData} />
      </View>
    </TouchableWithoutFeedback>
  )
}