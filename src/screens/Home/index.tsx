import { Keyboard, StatusBar, TouchableWithoutFeedback, View } from 'react-native'
import Header from '../../components/Header'
import styles from './styles'
import CountBar from '../../components/CountBar'
import ToDoList from '../../components/ToDoList'
import React, { useEffect, useState } from 'react'
import DataServices from '../../services/DataServices'
import { Task } from '../../../data'

export default function Home() {
  const data = new DataServices()
  const [list, setList] = useState<Task[]>([])

  const created = list.length
  const concluded = list.filter(task => task.isCompleted).length
  
  useEffect(() => { getData() }, [])

  async function getData() {
    const tasks = await data.listTasks()
    setList([...tasks])
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
        />
        <Header data={data} onGetData={getData} />
        <CountBar created={created} concluded={concluded} />
        <ToDoList data={data} list={list} onGetData={getData} />
      </View>
    </TouchableWithoutFeedback>
  )
}