//========== components ==========
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container';

//========== styles ==========
import {
	SearchMovieApp,
	HeaderNav,
	PagesList,
	Item,
	HomeLink,
	MoviesLink,
} from './SharedLayout.styled';

const SharedLayout = () => {
	return (
		<SearchMovieApp>
			<HeaderNav>
				<Container>
					<nav>
						<PagesList>
							<Item>
								<HomeLink to="/">Home</HomeLink>
							</Item>
							<Item>
								<MoviesLink to="/movies">Movies</MoviesLink>
							</Item>
						</PagesList>
					</nav>
				</Container>
			</HeaderNav>
			<Suspense>
				<Outlet />
			</Suspense>
		</SearchMovieApp>
	);
};

export { SharedLayout };
