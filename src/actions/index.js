export const fetchMovieSuccess = (data) => (
  {
    type: 'FETCH_MOVIES',
    payload: data.Search
  }
)

export const fetchMovies = (keyword) => {
  return (dispatch) => {
    fetch("http://www.omdbapi.com/?s="+keyword)
      .then(res => res.json())
      .then(data => dispatch(fetchMovieSuccess(data)));
  };
};
