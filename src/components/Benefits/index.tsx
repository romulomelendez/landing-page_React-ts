import { useContext } from 'react'

import { Cards } from '../../components/Cards'

import { PageContext } from '../../Contexts/PageContext'

import { Container } from './styles'

export const Benefits: React.FC = () => {

    const { photos, titles } = useContext(PageContext)

    return (

        <Container>

            <Cards />

        </Container>

    
    )
}