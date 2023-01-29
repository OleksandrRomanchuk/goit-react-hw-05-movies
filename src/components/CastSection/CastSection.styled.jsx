import styled from "styled-components";

export const Wrapper = styled.div`
    width: 768px;
    padding: 0 20px;

    margin: 0 auto;
`;

export const Title = styled.h3`
    font-size: 20px;
    text-align: center;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    margin-top: 15px;
`;

export const Item = styled.li`
    border: 1px solid black;
`;

export const Photo = styled.img`
    max-width: 175px;
    min-height: 263px;
    object-fit: contain;
`;

export const Info = styled.div`
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 4px;
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