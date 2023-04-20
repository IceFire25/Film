import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/preloader";
import { Search } from "../components/search";


class Main extends React.Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=ab258471&s=Venom')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }

    searchMovies = (str, type= "all") => {
        fetch(
            `http://www.omdbapi.com/?apikey=ab258471&s=${str}${
            type !== "all" ? `&type=${type}` : ""
            }`
        )
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search }));
    }

    render() {
        const { movies } = this.state;
        return <main className="container content">
        <Search searchMovies={this.searchMovies}/>
        {
            movies.length ? (
                <Movies movies={this.state.movies} />
            ) : <Preloader/>
        }
    </main>
    }
}

export { Main };