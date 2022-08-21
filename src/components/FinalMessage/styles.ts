import styled from 'styled-components'

export const Container = styled.div `

    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(100px, max-content));
    padding: 20px;
    row-gap: 30px;

    @media (max-width: 430px) {
        width: 275px;
        margin-left: -40px;
    }

`

export const Title = styled.h1 `

    /* font-size: 30pt; */
    color: #19628b;
    font-size: 40pt;
    font-weight: 800;
    min-width: 150px;

    @media (max-width: 530px) {
        font-size: 30pt;
    }

    @media (max-width: 430px) {
        font-size: 23pt;
    }

`

export const Message = styled.p `

    color: #808080;
    min-width: 150px;

    @media (max-width: 430px) {
        font-size: 12pt;
    } 

`