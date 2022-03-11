import { Container } from './style';

import { FiHome } from "react-icons/fi";

export default function TittlePage(props) {

    return (
        <Container>
            <FiHome/>
            <label>{props.nomeTitulo}</label>
        </Container>
        
    );
}