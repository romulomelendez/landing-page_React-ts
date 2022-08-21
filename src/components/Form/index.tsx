import { useContext } from 'react'

import { PageContext } from '../../contexts/PageContext'

import { Container, EnterpriseContainer, Input, InputContainer, InternalContainer, Button } from './styles'

export const Form: React.FC = () => {

    const { titles } = useContext(PageContext)
    let splittedString = titles[0].split(' ')

    return (

        <Container>

            <EnterpriseContainer>
                <label>{ splittedString[0] + ' ' + splittedString[1] }</label>
                <Input type="text" placeholder={ titles[2] } />
            </EnterpriseContainer>

            <InputContainer>

                <InternalContainer>
                    <label>{ splittedString[2] }</label>
                    <Input type="text" placeholder={ titles[0] } />
                </InternalContainer>

                <InternalContainer>
                    <label>{ splittedString[3] }</label>
                    <Input type="email" placeholder={ splittedString[4] + '@' + splittedString[2] + '.com' } />
                </InternalContainer>

            </InputContainer>

            <InputContainer>
                
                <InternalContainer>
                    <label>{ splittedString[4] }</label>
                    <Input type="text" placeholder='() _____-____' />
                </InternalContainer>

                <InternalContainer>
                    <label>{ splittedString[5] }</label>
                    <Input type="text" placeholder={ splittedString[2] + '.com.br' }/>
                </InternalContainer>

            </InputContainer>

            <Button type='submit'>{ splittedString[1] }</Button>
            
        </Container>

    )

}