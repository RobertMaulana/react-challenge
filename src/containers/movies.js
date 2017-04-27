import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';

class Movies extends Component{

  sendKeywords(e){
    this.props.fetchMovies(e.target.value)
  }

  render(){
    return(
      <div>
        <input type="text" ref="keyword" onChange={this.sendKeywords.bind(this)}/>
        <ul>
          {this.props.movies.map((movies) => {
            return (
              <li key={movies.imdbID}>{movies.Title}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
};

const mapsDispatchToProps = (dispatch) => {
  return {
    fetchMovies: e => dispatch(fetchMovies(e))
  }
}

Movies = connect(mapStateToProps, mapsDispatchToProps)(Movies)

export default Movies
