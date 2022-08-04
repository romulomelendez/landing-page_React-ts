import { NavBar } from './styles'

import Pagcom_logo from '../../assets/images/Pagcom_logo.png'

export const TheNavBar: React.FC = () => 
    
    <NavBar>
        <p>Seja um agente da </p>
        <img src={Pagcom_logo} alt="Pagcom logo" />
    </NavBar>