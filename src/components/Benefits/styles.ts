import styled from 'styled-components'

export const Container = styled.div `
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 52px;
    width: 100%;
    height: 500px;
    margin-top: -80px; 

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