"use srtict";
var movies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    desc: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    img: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },
  {
    id: 2,
    title: 'Pulp Fiction',
    desc: 'The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    img: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg'
  },
  {
  	id: 3,
  	title: 'Fight Club',
  	desc: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
  	img: 'https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },
  {
  	id: 4,
  	title: 'Goodfellas',
  	desc: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
  	img: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }
];

var Movie = React.createClass({
	propTypes: {
    	movie: React.PropTypes.object.isRequired,
  	},
	render: function(){
		return (
			React.createElement('li', {}, 
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieImage, {image: this.props.movie.img}),
				React.createElement(MovieDescription, {description: this.props.movie.desc})
			)
		)
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},
	render: function(){
		return (
			React.createElement('h2', {}, this.props.title)
		)
	}
});
var MovieImage = React.createClass({
	propTypes: {
		description: React.PropTypes.object.isRequired
	},
	render: function(){
		return (
			React.createElement('img', {src: this.props.image})
		)
	}
});
var MovieDescription = React.createClass({
	propTypes: {
		description: React.PropTypes.string.isRequired
	},
	render: function(){
		return (
			React.createElement('p', {}, this.props.description)
		)
	}
});

var Movies = React.createClass({
	propTypes: {
		movies: React.PropTypes.array.isRequired
	},
	render: function(){
		var movieElement = this.props.movies.map(function(movie){
			return React.createElement(Movie, {
				key: movie.id,
				movie: movie
			})
		})
	return React.createElement('ul', {}, movieElement)
	}
});

var element = React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów: '),
		React.createElement(Movies, {movies: movies})
	);
ReactDOM.render(element, document.getElementById('app'));