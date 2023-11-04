import { View } from 'react-native'
import Header from '../../components/Header'
import styles from './styles'
import StatusBar from '../../components/StatusBar'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar />
    </View>
  )
}