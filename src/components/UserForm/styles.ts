import styled from 'styled-components'

export const Container = styled.div `

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 600px));
    justify-content: center;
    align-items: center;
    /* margin-bottom: 100px; */
    column-gap: 25px;

    @media (max-width: 1484px) {
        /* grid-template-columns: none;
        grid-template-rows: repeat(2, 50%);
        height: max-content;
        width: 600px;
        margin-top: -350px; */
        place-items: center;
        row-gap: 25px;
    }
    
`