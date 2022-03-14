import styled from "styled-components";

export const Container = styled.div`
    background-color: #d0d0d0;
    height: 100vh;
    width: 100vw;

`;

export const Content = styled.div`
    margin-left: 230px;
    padding-top: 14px;
    padding-left: 20px;
    padding-right: 20px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 800px){
        margin: 0;
        padding-top: 90px;
    }
`;

export const SettingsInfo = styled.form`
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 5px;

    label{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 250px;
        max-height: 250px;
        z-index: 100;
        background-color: aliceblue;
        cursor: pointer;

        input{
            display: none;
        }

        span{
            position: absolute;
        }

        img{
            object-fit: cover;
            border-radius: 50%;
        }
    }

    div{
        display: flex;
        flex-direction: column;
        width: 250px;
        margin-top: 20px;

        span{
            font-size: 18px;
            font-family: 'Roboto';
            font-weight: bold;
            margin-bottom: 5px;
        }

        input{
            margin-bottom: 15px;
            height: 25px;
            padding-left: 15px;
            padding-right: 15px;
            outline: none;
        }
    }

    button{
        margin-top: 15px;
        width: 250px;
        height: 40px;
        background-color: #04C35C;
        border-radius: 5px;
        border-style: none;
        cursor: pointer;
        font-family: 'Roboto';
        font-weight: bold;
        
        label{

            color: white;
        }
    }
`;
