import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: 40,
  },
  content: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  countContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6
  },
  created: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4EA8DE'
  },
  concluded: {
    fontSize: 14,
    fontWeight: '700',
    color: '#8284FA'
  },
  count: {
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 100,
    color: '#FFFFFF'
  }
})

export default styles