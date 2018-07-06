import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({

  main_container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  search_container: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 50,
    width: Dimensions.get('window').width - 20
  },
  search_input: {
    flex: 5,
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    paddingLeft: 10
  },
  search_button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    flex: 1,
    height: 40
  },
  search_results: {
    flex: 1
  },
  movie_results: {
    alignItems: 'flex-start'
  }
})
