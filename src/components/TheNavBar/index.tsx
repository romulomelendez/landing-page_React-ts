import { NavBar, Text, MiniContainer, Img } from './styles'

import Pagcom_logo from '../../assets/images/Pagcom_logo.png'

export const TheNavBar: React.FC = () => 
    
    <NavBar>
        <MiniContainer>
            <Text>Seja um agente da </Text>
            <Img src={Pagcom_logo} alt="Pagcom logo" height="32" />
        </MiniContainer>
    </NavBar>