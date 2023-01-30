import PropTypes from 'prop-types';

//========== hooks ==========
import { useLocation } from 'react-router-dom';

//========== components ==========
import { NavLink } from 'react-router-dom';

//========== styles ==========
import { List, Item, MoviePoster, Wrapper, Title, InfoWrapper, Info, DateInfo, Divider } from './MoviesList.styled';

const MoviesList = ({ moviesInfo }) => {
    const location = useLocation();

    return <List>
        {moviesInfo.map(({ id, title, release_date = '----', vote_average, poster_path }) => {
            const fixedVotes = vote_average.toFixed(1);
            const fixedDate = release_date.split('-').reverse().join('.');

            return <Item key={id}>
                <NavLink to={`/movies/${id}`} state={{ from: location }}>
                    <MoviePoster src={poster_path} alt={title} />
                    <Wrapper>
                        <Title>{title}</Title>
                        <InfoWrapper>
                            <Info>{fixedVotes}</Info>
                            <Divider>I</Divider>
                            <DateInfo>{fixedDate}</DateInfo>
                        </InfoWrapper>
                    </Wrapper>
                </NavLink>
            </Item>
        })}
    </List>;
};

MoviesList.propTypes = {
    moviesInfo: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string,
        vote_average: PropTypes.number.isRequired,
        poster_path: PropTypes.any.isRequired
    }),),
}

export { MoviesList };