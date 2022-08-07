import { useContext } from 'react'

import { PageContext } from '../../Contexts/PageContext'

import { Container, ResponsibilitiesSection, ImageSection } from './styles'

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