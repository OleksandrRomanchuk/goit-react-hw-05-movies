import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SearchMovieApp = styled.div`
    position: relative;
    width: 98vw;
    height: 100vh;

    padding: 0 15px;
    padding-top: 50px;
`;

export const HeaderNav = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;

    background-color: rgb(15, 15, 28);
`;

export const PagesList = styled.ul`
    display: flex;

    padding-left: 40px;
`;

export const Item = styled.li`
    color: #ffffff;

    :not(:first-child) {
        margin-left: 30px;
    }
`;

export const MoviesLink = styled(NavLink)`
    position: relative;

    padding: 15px 0;

    font-weight: 600;

    transition: color 300ms ease-in-out;

    ::after {
        position: absolute;
        bottom: 12px;
        left: -1px;
    
        content: '';
        height: 0;
        width: calc(100% + 2px);

        background-color: red;

        transition: height 300ms ease-in-out;
    }

    &.active:after {
        height: 2px;
    }

    :hover, :focus {
        :after {
            height: 2px;
        }
    }
`;

export const HomeLink = styled(MoviesLink)`
    text-transform: uppercase;
`;

