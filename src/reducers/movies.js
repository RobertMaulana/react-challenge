let dataMovies = [];

const movies = (state = dataMovies, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'FETCH_MOVIES':
      return action.payload
    default:
      return state
  }
}

export default movies
