import styled from 'styled-components'

export const Container = styled.div `
    
    display: grid;
    grid-template-rows: repeat(4, auto);
    padding: 50px 100px 30px 100px;
    row-gap: 100px;

    @media (max-width: 1484px) {
        place-items: center;
    }

`

export const Title = styled.h1 `

    color: #105a7d;

`

export const Subtitle =  styled.h4 `

    color: #808080;

`