import styled from "styled-components";


export const Container = styled.div`
    width: 230px;
    height: 100vh;
    position: fixed;
    overflow: auto;
    background-color: #FFFF;
    font-family: 'Roboto';
    box-shadow: 0 0 1em #000;

    @media screen and (max-width: 800px){
        width: 100vw;
        height: 70px;
        overflow: hidden;
        display: flex;
        align-items: center;
    }
`;

export const HamburgerMenu = styled.div`
    display: none;

    @media screen and (max-width: 800px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        div{
            border-radius: 10px;
            width: 30px;
            height: 5px;
            background-color: #000;
        }

        >:nth-child(2){
            margin-top: 5px;
        }

        >:nth-child(3){
            margin-top: 5px;
        }

        :active{
            display: flex;
            align-items: center;
            justify-content: center;

            >:nth-child(1){
                transform: rotate(45deg);
                position: absolute;
                margin: 0;
            }
            >:nth-child(2){
                margin-top: 5px;
                display: none;
            }

            >:nth-child(3){
                transform: rotate(-45deg);
                position: absolute;
                margin: 0;
            }

        }
    }
`;

export const ImageDiv = styled.div`
    background-color: #f0f2f5;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    box-shadow: 0 0 1em #000;

    img{
        border-radius: 50%;
        width: 70px;
        height: 70px;
        -webkit-filter: drop-shadow(2px 3px 6px #121212);
        filter: drop-shadow(2px 3px 6px #121212);
        object-fit: cover;
    }

    label{
        margin-top: 20px;
        font-weight: bold;
    }

    @media screen and (max-width: 800px){
        display: none;
    }
`;

export const DivLinks = styled.div`

    a{
        padding: 16px;
        text-decoration: none;
        display: flex;
        align-items: center;
        color: white;
        font-size: 14px;

        :hover{
            background-color: #f0f2f5;
            transition: all .4s ease-in-out;
            box-shadow: 0 0 .1em #000;
        }

        label{
            padding-left: 10px;
            font-weight: bold;
            cursor: pointer;
            color: #000;
        }
    }

    @media screen and (max-width: 800px){
        a{
            display: none;
        }
    }
`;