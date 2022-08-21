import styled from 'styled-components'

export const Container = styled.form `

   display: grid;
   grid-template-rows: repeat(auto-fit, 40px);
   height: max-content;
   max-width: 600px;
   width: 100%;
   padding: 5px;
   row-gap: 50px;

   label {
        color: #808080;
        font-size: 15pt;
        font-weight: 500;
    }

    @media (max-width: 430px) {
        margin-left: -40px;
        width: 92%;
    }

`

export const EnterpriseContainer = styled.div `

    display: grid;
    grid-template-rows: repeat(auto-fit, max-content);
    max-width: 100%;
    height: max-content;
    row-gap: 5px;

`
export const Input = styled.input `

    max-width: 600px;
    min-width: 50px;
    height: 50px;
    padding: 15px;
    font-size: 12pt;
    color: #1a6591;
    border: 1px solid #cecece;

`

export const InputContainer = styled.div `

    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 500px));
    column-gap: 50px;
    max-width: 100%;
    height: max-content;

    @media (max-width: 680px) {
        grid-template-columns: none;
        grid-template-rows: repeat(auto-fit, 100px);
    }

`

export const InternalContainer = styled.div `

    display: grid;
    grid-template-rows: repeat(2, max-content);
    row-gap: 7px;

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