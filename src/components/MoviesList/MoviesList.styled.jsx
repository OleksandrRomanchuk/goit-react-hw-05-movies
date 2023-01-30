import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 20px;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}

	@media screen and (min-width: 1280px) {
		grid-template-columns: repeat(5, 1fr);
	}
`;

export const Item = styled.li`
	border: 1px solid grey;
	border-radius: 3px;
	overflow: hidden;
`;

export const CardLink = styled(NavLink)`
	max-width: 100%;
`;

export const MoviePoster = styled.img`
	max-width: 100%;
	min-height: 330px;

	object-fit: contain;
`;

export const Wrapper = styled.div`
	padding: 8px 16px;
	padding-bottom: 10px;

	@media screen and (min-width: 768px) {
		padding: 4px 12px;
		padding-bottom: 6px;
	}
`;

export const Title = styled.p`
	font-size: 20px;
	font-weight: 700;

	@media screen and (min-width: 768px) {
		font-size: 14px;
	}
`;

export const InfoWrapper = styled.div`
	display: flex;

	margin-top: 6px;

	@media screen and (min-width: 768px) {
		margin-top: 4px;
	}
`;

export const Info = styled(Title)`
	font-weight: 600;
	font-size: 16px;
	color: #9e9e9e;

	@media screen and (min-width: 768px) {
		font-size: 10px;
	}
`;

export const Divider = styled.span`
	margin-left: 4px;

	font-size: 16px;
	font-weight: 600;

	color: #ff9d7a;

	@media screen and (min-width: 768px) {
		font-size: 10px;
	}
`;

export const DateInfo = styled(Info)`
	margin-left: 4px;
`;
