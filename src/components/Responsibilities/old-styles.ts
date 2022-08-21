import styled from "styled-components"

export const Container = styled.div `

    display: grid;
    grid-template-columns: 60% 40%;
    align-items: center;
    justify-content: center;
    /* height: max-content; */
    /* max-width: max-content; */
    width: 100%;
    column-gap: 20px;
    margin-top: 150px;  

    @media (max-width: 1484px) {
        grid-template-columns: none;
        grid-template-rows: 1fr 1fr;
        place-items: center;
        height: max-content;
        width: 55%;
        row-gap: 25px;
        /* margin-top: -270px; */
    }


    @media (max-width: 972px) {
        grid-template-rows: 1fr max-content;
        margin-top: 300px;
        margin-bottom: 160px;
        height: min-content;
        /* margin-top: 200px; */
    }

`

export const Title = styled.h1 `

    color: #105a7d;
    font-weight: 800;
    font-size: 29pt;
    
`

export const ResponsabilitiesItems = styled.div `

    display: flex;
    flex-direction: column;
    gap: 30px;

`

export const ResponsibilitiesSection = styled.div `

    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(100px, 150px));
    /* gap: 1.6rem; */
    /* padding: 5px; */

`

export const ImageSection = styled.div `

    /* overflow: hidden; */
    background-color: red;
    
`

export const Image = styled.img `

    object-fit: cover;
    height: 100%;
    width: 100%;

    @media (max-width: 1484px) {
        height: 40em;
        width: 40em;
    }

    /* @media (max-width: 699px) {
        display: none;
    } */

`
export const Item = styled.div `

    display: flex;
    flex-direction: row;
    gap: 5px;

`
export const Index = styled.p `

    color: #1a6591;
    font-weight: 800;
    
`

export const Content = styled.p ` color: #808080; `