import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
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
    min-height: 351px;

    object-fit: contain;
`;

export const Wrapper = styled.div`
    padding: 4px 8px;
    padding-bottom: 6px;
`;

export const Title = styled.p`
    font-size: 14px;
    font-weight: 700;
`;

export const InfoWrapper = styled.div`
    display: flex;

    margin-top: 4px;
`;

export const Info = styled(Title)`
    font-weight: 600;
    font-size: 10px;
    color: #9e9e9e;
`;

export const Divider = styled.span`
    margin-left: 4px;

    font-size: 10px;
    font-weight: 600;

    color: #ff9d7a;
`;

export const DateInfo = styled(Info)`
    margin-left: 4px;
`;