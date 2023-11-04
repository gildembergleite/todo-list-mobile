import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    paddingHorizontal: 24,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#262626',
    marginBottom: 12,
    paddingRight: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333'
  },
  checkBox: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#262626',
    color: '#FFFFFF'
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    backgroundColor: 'darkred'
  },
  emptyContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 48,
    borderTopWidth: 1,
    borderColor: '#808080'
  },

})

export default styles