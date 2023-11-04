import { Alert, FlatList, Text, View } from 'react-native'
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

  function handleDeleteTask(taskId: number) {
    Alert.alert(
      'Tem certeza?',
      'A tarefa será excluída permanentemente.',
      [
        {
          text: 'Excluir',
          onPress: (async () => {
            await data.deleteTask(taskId)
            await onGetData()
          }),
          style: 'destructive'
        },
        {
          text: 'Cancelar',
        }
      ])
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.content}>
            <CheckBox
              onPress={() => handleCheckTask(item.id)}
              containerStyle={styles.checkBox}
              title={item.description}
              checked={item.isCompleted}
              textStyle={{
                color: item.isCompleted ? '#808080' : '#FFFFFF',
                fontWeight: '400',
                textDecorationLine: item.isCompleted ? 'line-through' : 'none'
              }}
            />
            <Icon
              brand
              color="#808080"
              name="delete-forever"
              onPress={() => handleDeleteTask(item.id)}
              size={20}
              style={{ padding: 5 }}
            />
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Icon
              brand
              color="#808080"
              name="content-paste"
              size={56}
            />
            <Text style={{ color: '#808080', fontWeight: '700', marginTop: 16, }}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={{ color: '#808080' }}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  )
}
