import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.main`
	padding-bottom: 20px;
`;

export const BackLink = styled(NavLink)`
	display: flex;
	justify-content: baseline;
	align-items: center;
	font-size: 14px;
`;

export const LinkSpan = styled.span`
	margin-left: 4px;

	font-weight: 500;

	transition: color 250ms ease-in-out;

	:hover,
	:focus {
		color: orangered;
	}
`;

export const Card = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	justify-content: center;
	gap: 20px;

	margin-top: 10px;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(2, 300px);

		margin-top: 0;
		padding: 20px;
	}

	@media screen and (min-width: 1280px) {
		grid-template-columns: repeat(2, 400px);

		margin-top: 0;
		padding: 20px;
	}
`;

export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (min-width: 768px) {
		padding: 10px 0;
	}
`;

export const Title = styled.h2`
	font-size: 20px;
`;

export const Devider = styled.span`
	margin-left: 8px;

	font-weight: 500;
	color: orangered;
`;

export const TitleSpan = styled.span`
	margin-left: 8px;

	font-size: 14px;
	color: #9e9e9e;
`;

export const Info = styled.p`
	margin-top: 20px;

	font-size: 14px;
	font-weight: 500;
	color: #9e9e9e;
`;

export const InfoSpan = styled.span`
	margin-left: 8px;

	font-size: 12px;
	font-weight: 400;
	color: rgb(15, 15, 28);
`;

export const Poster = styled.img`
	width: 100%;
	height: auto;

	@media screen and (min-width: 768px) {
		max-width: 400px;
	}
`;

export const AddWrapper = styled.div`
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 25px;

	@media screen and (min-width: 768px) {
		margin-top: 0;
	}

	:before,
	:after {
		content: '';
		position: absolute;
		display: block;

		width: 100%;
		height: 1px;

		border-top: 1px solid #9e9e9e;
	}

	::before {
		top: -10px;
	}

	::after {
		bottom: -10px;
	}
`;

export const AddTitle = styled.h3`
	font-size: 12px;

	text-transform: uppercase;
`;

export const AddList = styled.ul`
	display: flex;

	margin-top: 10px;
`;

export const AddItem = styled.li`
	:not(:first-child) {
		margin-left: 25px;
	}
`;

export const AddLink = styled(NavLink)`
	position: relative;

	font-weight: 500;
	color: #9e9e9e;

	transition: color 300ms ease-in-out;

	&.active {
		color: orangered;
	}

	:hover,
	:focus {
		color: orangered;
	}
`;
