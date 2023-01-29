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

export const Message = styled.p`
    margin-top: 10px;

    font-size: 14px;
    text-align: center;
`;

export const List = styled.ul`
    margin-top: 10px;
`;

export const Item = styled.li`
    padding: 15px;

    border: 1px solid black;

    :not(:first-child) {
        margin-top: 10px;
    }
`;

export const Author = styled.p`
    font-weight: 500;
    color: #9e9e9e;
`;

export const Devider = styled.span`
    margin-left: 4px;

    font-weight: 500;
    color: orangered;
`;

export const AuthorSpan = styled.span`
    margin-left: 4px;

    font-size: 16px;
    font-weight: 500;
    color: rgb(15, 15, 28);
`;

export const Content = styled.p`
    margin-top: 8px;
`;