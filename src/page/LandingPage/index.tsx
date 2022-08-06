import { useState, useEffect } from 'react'

import { Top } from '../../components/Top'

import { Container } from './styles'

export const LandingPage: React.FC = () => {

    const [titles, setTitles] = useState<string[]>([])
    const [body, setBody] = useState<string[]>([])
    const [photos, setPhotos] = useState<string[]>([])
    const [mainImage, setMainImage] = useState('')

    useEffect(() => {

        const handleData = (data: any, endpoint: string): void => {

            if( endpoint === 'posts' ) {

                for(var i = 0; i < 10; i++) {
                    setBody(old => [...old, data[i].body])
                }

            } else if( endpoint === 'todos' ) {

                for(var i = 0; i < 10; i++) {
                    setTitles(old => [...old, data[i].title])
                }

            } else {

                for(var i = 0; i < 10; i++) {
                    setPhotos(old => [...old, data[i].url])
                    setMainImage(data[0].thumbnailUrl)
                }

            }

        }
      
        const handleApiCall = (endpoint: string): void => {
            
            fetch(import.meta.env.VITE_BASE_API_URL + endpoint)
                .then(response => response.json())
                .then(data => handleData(data, endpoint))          

        }

        handleApiCall('posts')
        handleApiCall('todos')
        handleApiCall('photos')

    }, [])

    return (

        <Container>

            <Top />

        </Container>

    )

}