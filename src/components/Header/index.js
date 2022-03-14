import { useContext, useState } from "react"; 
import { Container, DivLinks, ImageDiv, HamburgerMenu } from './style';
import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom";

import avatar from '../../assets/avatar.png'
import { FiHome, FiUsers, FiSettings } from "react-icons/fi";

export default function Header() {

    const { user } = useContext(AuthContext);
    const [menuActive, setMenuActive] = useState(false);

    return (
        <Container>
            <HamburgerMenu menuActive={menuActive} onClick={() => {setMenuActive(!menuActive)}}>
                <div></div>
                <div></div>
                <div></div>
            </HamburgerMenu>
            <ImageDiv>
                <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="Image Profile"/>
                
                <label>{user.nome}</label>
            </ImageDiv>
            <DivLinks>
                <Link to="/dashboard">
                    <FiHome color="#000" size={14}/>
                    <label>Chamados</label>
                </Link>
                <Link to="/clients">
                    <FiUsers color="#000" size={14}/>
                    <label>Clientes</label>
                </Link>
                <Link to="/profile">
                    <FiSettings color="#000" size={14}/>
                    <label>Perfil</label>
                </Link>
            </DivLinks>
        </Container>
        
    );
}