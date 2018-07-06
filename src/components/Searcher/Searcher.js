import React, { Component } from 'react';
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';

import styles from './SearchStyles';
import * as urls from '../../constants/api';

export default class Searcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      movie: null,
      errorMessage: ''
    }
    this.searchMovies = this.searchMovies.bind(this);
  }

  searchMovies = () => {
    let apiURL = urls.API_URL;
    search = this.state.search;
    searchMovieURL = apiURL + '&t=' + search;

    fetch(searchMovieURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json()).then((data) => {
        if (data.Response === 'False') {
          this.setState({ errorMessage: data.Error })
        } else {
          console.log(data);
          this.setState({ movie: data })
        }
    })
      .catch((error) => {
        console.log(error);
      })
  }

  renderMovie = () => {
    movie = this.state.movie;

    if(movie) {
      return(
        <View>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: movie.Poster}}
          />
          <Text>Name: {movie.Title}</Text>
          <Text>Year: {movie.Year}</Text>
          <Text>Duration: {movie.Duration}</Text>
          <Text>Sinopsis: {movie.Plot}</Text>
        </View>
      )
    }
  }

  render() {

    return (
      <View style={styles.main_container}>
        <View style={styles.search_container}>
          <TextInput
            style={styles.search_input}
            onChangeText={(search) => this.setState({search})}
            value={this.state.search}
            placeholder='Enter your movie name'
            underlineColorAndroid='transparent'
          />
          <TouchableOpacity
            style={styles.search_button}
            onPress={this.searchMovies}
          >
            <Text> Search </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.search_results}>
          <Text>
            Movies Results:
          </Text>
          <Text>
            { this.state.errorMessage }
          </Text>
          <View style={styles.movie_results}>
            { this.renderMovie() }
          </View>
        </View>
      </View>
    )
  }
}