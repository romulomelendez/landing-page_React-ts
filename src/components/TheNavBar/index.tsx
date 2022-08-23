import { useContext } from 'react'

import { PageContext } from '../../contexts/PageContext'

import { NavBar, Text, MiniContainer, Img } from './styles'

import Pagcom_logo from '../../assets/images/Pagcom_logo.png'

export const TheNavBar: React.FC = () => {

    const { titles } = useContext(PageContext)
    
    return (
    
        <NavBar>
            <MiniContainer>
                <Text>{ titles[0].slice(0, 12) }</Text>
                <Img src={Pagcom_logo} alt="Pagcom logo" height="32" />
            </MiniContainer>
        </NavBar>

    )

}