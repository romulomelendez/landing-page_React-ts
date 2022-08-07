import { useEffect, useContext } from 'react'

import { Top } from '../../components/Top'
import { Benefits } from '../../components/Benefits'
import { Responsibilities } from '../../components/Responsibilities'

import { PageContext } from '../../Contexts/PageContext'

import { Container } from './styles'

export const LandingPage = () => {

    const {
        
        titles,
        setTitles,
        body,
        setBody,
        photos,
        setPhotos,
        mainImage,
        setMainImage

    } = useContext(PageContext)

    useEffect(() => {

        const handleData = ( data, endpoint ) => {

            if( endpoint === 'posts' ) {

                for(var i = 0; i < 10; i++) {

                    body[0] === '' && body.shift()
                    setBody(old => [...old, data[i].body])
                }

            } else if( endpoint === 'todos' ) {

                for(var i = 0; i < 7; i++) {

                    titles[0] === '' && titles.shift()
                    setTitles(old => [...old, data[i].title])
                }

            } else {

                for(var i = 0; i < 7; i++) {

                    photos[0] === '' && photos.shift()
                    setPhotos(old => [...old, data[i].url])
                    setMainImage(data[0].thumbnailUrl)
                }

            }

        }
      
        const handleApiCall = (endpoint) => {
            
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
            <Benefits />
            <Responsibilities />

        </Container>

    )

}