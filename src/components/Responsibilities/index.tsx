import { useContext } from 'react'

import { Container, ResponsibilitiesSection, ImageSection } from './styles'

import { PageContext } from '../../Contexts/PageContext'

export const Responsibilities: React.FC = () => {

    const { titles, body, mainImage } = useContext(PageContext)

    return (

        <Container>

            <ResponsibilitiesSection>
               
            </ResponsibilitiesSection>

            <ImageSection>
                <img src={ mainImage } alt="main photo" />
            </ImageSection>

        </Container>

    )

}