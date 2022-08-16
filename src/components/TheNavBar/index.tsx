import { useContext } from 'react'

import { PageContext } from '../../contexts/PageContext'

import { NavBar, Text, MiniContainer, Img } from './styles'

import Pagcom_logo from '../../assets/images/Pagcom_logo.png'

export const TheNavBar: React.FC = () => {

    const { titles } = useContext(PageContext)
    
    let splittedString = titles[0].split(' ')
    let sentence = splittedString[0] + ' ' + splittedString[1] + ' ' + splittedString[2]
    
    return (
    
        <NavBar>
            <MiniContainer>
                <Text>{ sentence }</Text>
                <Img src={Pagcom_logo} alt="Pagcom logo" height="32" />
            </MiniContainer>
        </NavBar>

    )

}