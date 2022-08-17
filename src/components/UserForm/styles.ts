import styled from 'styled-components'

export const Container = styled.div `

    display: grid;
    grid-template-columns: repeat(2, 50%);
    height: max-content;
    /* margin-top: 100px; */
    margin-bottom: 100px;
    column-gap: 25px;

    @media (max-width: 1484px) {
        grid-template-columns: none;
        height: max-content;
        width: 600px;
        /* margin-top: -350px; */
        row-gap: 50px;
        place-items: center;
        grid-template-rows: repeat(2, 50%);
    }
    
`