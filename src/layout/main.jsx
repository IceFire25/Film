import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/preloader";
import { Search } from "../components/search";


class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=ab258471&s=Venom")
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading:false }));
    }

    searchMovies = (str, type = "all") => {
        fetch(
            `http://www.omdbapi.com/?apikey=ab258471&s=${str}${
                type !== "all" ? `&type=${type}` : ""
            }`
        )
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search, loading:false }));
    };

    render() {
        const {loading } = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies}/>
                {loading ? <Preloader/> : <Movies movies={this.state.movies} />}
            </main>
        );
    }
}
export { Main };