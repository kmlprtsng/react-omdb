import React from "react";
import { connect } from "react-redux";

class SearchResults extends React.Component {
  renderMovies(movies) {
    return movies.map(movie => {
      return <ul key={movie.imdbID}>{movie.Title}</ul>;
    });
  }
  render() {
    const { movies } = this.props;

    if (movies === null) {
      return <div />;
    }

    if (movies.length === 0) {
      return <div>No movies found</div>;
    }

    return <ul>{this.renderMovies(movies)}</ul>;
  }
}

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps)(SearchResults);
