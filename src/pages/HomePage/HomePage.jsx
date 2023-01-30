import MovieAPI from "API/API";

//========== hooks ==========
import { useState, useEffect } from "react";

//========== components ==========
import { Container } from 'components/Container/Container';
import { MoviesList } from "components/MoviesList/MoviesList";
import placeholder from 'images/placeholder.jpg'

//========== styled ==========
import { Main } from "./HomePage.styled";

const HomePage = () => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        MovieAPI.getTrendingMovies('week').then((movies => {
            const info = movies.reduce((acc, movie) => {
                const poster = movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : placeholder;
                const film = {
                    id: movie.id,
                    title: movie.title,
                    release_date: movie.release_date,
                    poster_path: poster,
                    vote_average: movie.vote_average
                };
                return [...acc, film]
            }, []);

            setMovies(info);
        }));
    }, []);

    if (!movies) return;

    return <Main>
        <Container>
            <MoviesList
                moviesInfo={movies} />
        </Container>
    </Main>;
};

export default HomePage;