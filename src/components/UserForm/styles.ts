import styled from 'styled-components'

export const Container = styled.div `

    display: grid;
    grid-template-columns: repeat(2, 50%);
    height: max-content;
    margin-top: 100px;

    @media (max-width: 1484px) {
        grid-template-columns: none;
        height: max-content;
        width: max-content;
        margin-top: -350px;
        grid-template-rows: repeat(2, 50%);
    }

`