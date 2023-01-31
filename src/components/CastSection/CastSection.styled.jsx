import styled from 'styled-components';

export const Wrapper = styled.div`
	margin: 0 auto;
	margin-top: 25px;
`;

export const Title = styled.h3`
	font-size: 20px;
	text-align: center;
`;

export const Message = styled.p`
	margin-top: 10px;

	font-size: 14px;
	text-align: center;
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 15px;

	margin-top: 15px;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}

	@media screen and (min-width: 1280px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const Item = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid black;
`;

export const Photo = styled.img`
	width: 100%;
	min-height: 315px;
	object-fit: cover;
	object-position: top;

	@media screen and (min-width: 768px) {
		min-height: 347px;
	}

	@media screen and (min-width: 1280px) {
		min-height: 437px;
	}
`;

export const Info = styled.div`
	padding-top: 8px;
	padding-bottom: 8px;
	padding-left: 4px;

	min-height: 64px;
`;

export const Name = styled.p`
	font-size: 14px;
	font-weight: 500;
`;

export const Character = styled.p`
	margin-top: 4px;

	font-weight: 500;
	color: #9e9e9e;
`;

export const Devider = styled.span`
	margin-left: 4px;

	font-weight: 500;
	color: orangered;
`;

export const CharacterSpan = styled.span`
	margin-left: 4px;

	font-weight: 400;
	color: rgb(15, 15, 28);
`;
