import { Text, View } from 'react-native'
import styles from './styles'

interface CountBarProps {
  created: number
  concluded: number
}

export default function CountBar({ created, concluded }: CountBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.countContainer}>
          <Text style={styles.created}>Criadas</Text>
          <Text style={styles.count}>{created}</Text>
        </View>
        <View style={styles.countContainer}>
          <Text style={styles.concluded}>Concluídas</Text>
          <Text style={styles.count}>{concluded}</Text>
        </View>
      </View>
    </View>
  )
}