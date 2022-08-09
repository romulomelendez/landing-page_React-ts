import { useContext, useEffect } from 'react'

import { PageContext } from '../../Contexts/PageContext'

// import a photo to use in the component
import MainImage from '../../assets/images/happy-man.png'

import { Container, ResponsibilitiesSection, ImageSection, Image, Title, ResponsabilitiesItems, Item, Index, Content } from './styles'

export const Responsibilities: React.FC = () => {

    const { titles, body, mainImage } = useContext(PageContext)

    // useEffect(() => {
      
    //     body.map( item => {
    //         (item.split(' ')).slice(0, 3)
    //     })

    // }, [])
    

    return (

        <Container>

            <ResponsibilitiesSection>
               <Title>VAMOS JUNTOS</Title>
               <ResponsabilitiesItems>
                    {
                        body.map( (item, index) => (
                            <Item key={ index }>
                                <Index>{ index }.</Index>
                                <Content>{ item }</Content>
                            </Item>
                        ))
                    }
               </ResponsabilitiesItems>
            </ResponsibilitiesSection>

            <ImageSection>
                {/* <img src={ mainImage } alt="happy man image" /> */}
                <Image src={MainImage} alt="happy man image" />
            </ImageSection>

        </Container>

    )

}