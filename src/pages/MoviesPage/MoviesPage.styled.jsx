import styled from "styled-components";

export const Main = styled.main`
    padding-bottom: 20px;
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 768px;
    padding: 0 20px;
    padding-top: 10px;
    padding-bottom: 20px;

    margin: 0 auto;
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

    :hover, :focus {
        border-color: black;
    }

    ::placeholder {
        font-style: italic;
        color: grey;
    }
`;

export const Btn = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0;
    padding-right: 4px;

    font-size: 12px;

    border: none;
    background-color: transparent;

    transition: color 300ms ease-in-out;

    :hover, :focus {
        color: orangered;
    }
`;