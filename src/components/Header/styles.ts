import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    paddingTop: 40,
    paddingBottom: 40,
    position: 'relative'
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  to: {
    color: '#4EA8DE',
    fontSize: 42,
    fontWeight: '900',
  },
  do: {
    color: '#5E60CE',
    fontSize: 42,
    fontWeight: '900',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 4,
    paddingHorizontal: 24
  },
  textInput: {
    backgroundColor: '#262626',
    display: 'flex',
    flex: 1,
    fontSize: 16,
    padding: 16,
    borderRadius: 6,
    marginBottom: -70,
  },
  addButton: {
    backgroundColor: '#1E6F9F',
    width: 60,
    height: 60,
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -70,
  },
  textAddButton: {
    color: '#fff',
    fontSize: 20,
  }
})

export default styles