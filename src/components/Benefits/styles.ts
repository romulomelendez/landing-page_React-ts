import styled from 'styled-components'

export const Container = styled.div `
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 220px));
    grid-gap: 52px;
    width: 99%;
    height: 500px;
    justify-content: center;
    align-items: center;

`

export const CardContainer = styled.div `

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 150px;
    gap: 10px;

`

export const RadialCard = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;
    height: 112px;
    width: 112px;
    border-radius: 50%;
    background-image: linear-gradient(#2ca6ee, #1a6691);

`

export const H6 = styled.h6 `

    font-size: 4pt;

`

export const Description = styled.p `

    color: #808080;
    font-size: 10pt;
    text-align: center;

`