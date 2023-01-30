import styled from 'styled-components';

export const Main = styled.main`
	padding-bottom: 20px;
`;

export const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	/* width: 480px; */
	padding: 0 25px;
	padding-top: 10px;
	padding-bottom: 20px;

	margin: 0 auto;

	@media screen and (min-width: 768px) {
		width: 768px;
	}

	@media screen and (min-width: 1280px) {
		width: 1280px;

		padding: 0 40px;
	}
`;

export const Form = styled.form`
	position: relative;

	margin-bottom: 16px;
`;

export const Input = styled.input`
	min-width: 300px;
	padding: 3px 8px;

	font-size: 12px;

	border: none;
	outline: none;
	border-bottom: 1px solid;
	border-color: #b5b5b5;
	background-color: transparent;

	transition: border-color 250ms ease-in-out;

	:hover,
	:focus {
		border-color: black;
	}

	::placeholder {
		font-style: italic;
		color: grey;
	}
`;

export const Btn = styled.button`
	position: absolute;
	bottom: 4;
	right: 0;
	padding: 0;
	padding-right: 4px;

	font-size: 12px;

	border: none;
	background-color: transparent;

	transition: color 300ms ease-in-out;

	:hover,
	:focus {
		color: orangered;
	}
`;

export const Message = styled.p`
	margin-top: 10px;

	font-size: 14px;
	text-align: center;
`;
