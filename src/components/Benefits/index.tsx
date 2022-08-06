
import { useContext } from 'react'

import { PageContext } from '../../Contexts/PageContext'
import { Container, Card, H6, P, CardContainer } from './styles'

export const Benefits: React.FC = () => {

    const { photos, titles } = useContext(PageContext)

    return (

        <Container>

            {
                photos.length != 0 &&
                    photos.map( (photo, index) => (

                        <CardContainer key={ index }>
                            <Card>
                                <H6>{ photo }</H6>
                            </Card>
                            <P>{ titles[index] }</P>
                        </CardContainer>

                    ))
            }

        </Container>

    )
}
