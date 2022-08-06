import { createContext, useState, ReactNode } from 'react'

type PageContextProps = {

    children: ReactNode
    
}

type PageContextType = {

    titles: string[],
    setTitles: (newState: string[]) => void,

    body: string[],
    setBody: (newState: string[]) => void,

    photos: string[],
    setPhotos: (newState: string[]) => void,

    mainImage: string,
    setMainImage: (newState: string) => void

}

const InitialValues = {

    titles: [''],
    setTitles: () => {},

    body: [''],
    setBody: () => {},

    photos: [''],
    setPhotos: () => {},

    mainImage: '',
    setMainImage: () => {}

}


export const PageContext = createContext<PageContextType>(InitialValues)


export const PageContextProvider = ({ children }: PageContextProps) => {

    const [titles, setTitles] = useState(InitialValues.titles)
    const [body, setBody] = useState(InitialValues.body)
    const [photos, setPhotos] = useState(InitialValues.photos)
    const [mainImage, setMainImage] = useState(InitialValues.mainImage)

    return (

        <PageContext.Provider value={{
            titles, setTitles,
            body, setBody,
            photos, setPhotos,
            mainImage, setMainImage
        }}>
            { children }
            
        </PageContext.Provider>

    )

}
