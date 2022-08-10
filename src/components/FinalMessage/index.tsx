import { useContext } from 'react'

import { PageContext } from '../../Contexts/PageContext'

import { Container, Title, Message} from './styles'

export const FinalMessage: React.FC = () => {

    const { titles, body } = useContext(PageContext)

    return (

        <Container>

            <Title>{ titles }</Title>
            <Message>{ titles }</Message>

        </Container>


    )

}