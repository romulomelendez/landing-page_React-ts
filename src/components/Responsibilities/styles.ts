import styled from "styled-components"

export const Container = styled.div `

    display: grid;
    grid-template-columns: 60% 40%;
    height: 530px;
    width: 100%;
    column-gap: 20px;
    margin: 20px auto 20px auto;
   

    @media (max-width: 1484px) {
        grid-template-columns: none;
        grid-template-rows: 1fr 1fr;
        place-items: center;
        height: max-content;
        width: 55%;
        row-gap: 25px;
        margin-top: -200px;
    }

    @media (max-width: 1211px) {
        margin-top: 0px;
        height: min-content;
        grid-template-rows: 1fr max-content;
    }

`

export const Title = styled.h1 ` color: #105a7d; `

export const ResponsabilitiesItems = styled.div `

    display: flex;
    flex-direction: column;
    gap: 30px;

`

export const ResponsibilitiesSection = styled.div `

    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 5px;

`

export const ImageSection = styled.div `

    overflow: hidden;

`

export const Image = styled.img `

    height: 100%;
    width: 100%;

    @media (max-width: 1484px) {
        height: 40em;
        width: 40em;
    }

    @media (max-width: 1211px) {
        display: none;
    }

`
export const Item = styled.div `

    display: flex;
    flex-direction: row;
    gap: 5px;

`
export const Index = styled.p ` color: #1a6591; `
export const Content = styled.p ` color: #808080; `