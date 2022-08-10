import styled from "styled-components"

export const NavBar = styled.nav `

    display: grid;
    height: 80px;
    max-width: 100vw;
    width: 100%;
    box-shadow: 0 6px 20px 0px #cecece;

    @media (max-width: 750px) {
        width: 750px !important;
    }

`

export const MiniContainer = styled.div `

    display: grid;
    grid-template-columns: 150px 50px;
    place-items: center;
    column-gap: 0.8rem;
    height: 100%;
    width: 15%;
    margin-left: 110px;
    background-color: red;

`

export const Text = styled.p `

    color: #808080;

`

export const Img = styled.img `

    margin-top: -4px;

`