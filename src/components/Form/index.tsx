import { Container, Input, Button, InputContainer, InternalContainer, EnterpriseContainer } from './styles'

export const Form: React.FC = () => {

    return (

        <Container>

            <EnterpriseContainer>

                <label>RAZÃO SOCIAL</label>
                <Input type="text" placeholder='Digite o nome da sua empresa' />

            </EnterpriseContainer>

            <InputContainer>

                <InternalContainer>
                    <label>Nome:</label>
                    <Input type="text" placeholder='Digite aqui seu nome' />
                </InternalContainer>

                <InternalContainer>
                    <label>E-mail:</label>
                    <Input type="email" placeholder='contato@empresa.com.br' />
                </InternalContainer>

            </InputContainer>

            <InputContainer>
                
                <InternalContainer>
                    <label>Telefone:</label>
                    <Input type="text" placeholder='()_____-____' />
                </InternalContainer>

                <InternalContainer>
                    <label>Site:</label>
                    <Input type="text" placeholder='suaempresa.com.br'/>
                </InternalContainer>

            </InputContainer>

            <Button type='submit'>ENVIAR</Button>
        </Container>

    )

}