import MovieAPI from "API/API";

//========== hooks ==========
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';

//========== components ==========
import { MoviesList } from "components/MoviesList/MoviesList";
import { FiSearch } from "react-icons/fi";
import placeholder from 'images/placeholder.jpg'

//========== styles ==========
import { FlexContainer, Form, Input, Btn } from "./MoviesPage.styled";

const MoviesPage = () => {
    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams('');
    const query = searchParams.get('query') ?? ``;

    useEffect(() => {
        if (!query) return;

        MovieAPI.getMoviesByQuery(query).then((movies) => {
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
        })
    }, [query]);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const searchQuery = event.target.elements.query.value;

        setSearchParams({ query: searchQuery });
    };
    
    return <main>
        <FlexContainer>
            <Form onSubmit={onFormSubmit}>
                <Input type="text" name="query" placeholder="Enter search query" value={searchParams.query} />
                <Btn type="submit"><FiSearch /></Btn>
            </Form>
            {movies && <MoviesList moviesInfo={movies} />}
        </FlexContainer>
    </main>;
};

export default MoviesPage;