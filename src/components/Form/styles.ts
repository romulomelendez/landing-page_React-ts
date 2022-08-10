import styled from 'styled-components'

export const Container = styled.form `

    display: grid;
    grid-template-rows: repeat(4, 40px);
    row-gap: 50px;


    label {
        color: #808080;
    }

`

export const Input = styled.input `

    width: 318px;
    height: 45px;
    color: #1a6591;
    padding: 10px;
    font-size: 10pt;
    border: 1px solid #cecece;

`

export const InputContainer = styled.div `

    display: grid;
    grid-template-columns: repeat(2, 50%);
    column-gap: 10px;

`

export const InternalContainer = styled.div `

    display: grid;
    grid-template-rows: 20px 40px;
    row-gap: 7px;

`

export const EnterpriseContainer = styled.div `

    display: grid;
    row-gap: 7px;

    input { width: 100%; }

`

export const Button = styled.button `

    height: 60px;
    background-color: #1a6591;
    padding: 20px;
    border: none;
    color: #fff;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-size: 12pt;

`