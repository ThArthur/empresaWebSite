import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;

    img{
        width: 40%;
        object-fit: cover;
    }

    div{
        flex: 1.5;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 1000px) {
        img{
            display: none;
        }

        div{
            flex: 3;
        }
    }
`;

export const LoginForm = styled.form`

    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    width: 400px;
    padding-top: 20px;

    h1{
        margin: 0;
        font-size: 30px;
        margin-bottom: 10px;
    }

    label{
        font-size: 16px;
        margin-bottom: 11px;
        margin-top: 20px;
        font-weight: bold;
    }

    input{
        height: 50px;
        max-width: 100%;
        font-size: 14px;
        padding-left: 15px;
        padding-right: 15px;
        font-family: 'Roboto';
        font-weight: bold;
        border-radius: 5px;
        border-style: solid;
        border-width: 1px;
    }

    div{
        display: flex;
        margin-top: 20px;
    }
`;

export const Button = styled.button`
    margin-top: 15px;
    width: 100%;
    height: 50px;
    background-color: #04C35C;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    
    label{
        color: white;
        cursor: pointer;
    }
`;

export const ButtonRegister = styled(Button)`
    background-color: #22201F;
`;