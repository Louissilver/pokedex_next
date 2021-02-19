import styled from 'styled-components';

const Card = styled.article`
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid black;
    border-radius: 10px;
    box-sizing: border-box;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    font-family: "Flexo-Medium",arial,sans-serif;
    justify-content: center;
    height: 540px;
    margin: 2rem auto;
    padding: 0;
    width: 95%;
    &:hover, &:focus, &:active{
        cursor: pointer;
        animation: jump .3s;
    }
    @media screen and (min-width: 500px){
        width: 60%;
        height: 460px;
    }
    @media screen and (min-width: 768px){
        height: 340px;
        margin: 2rem 1rem;
        width: 40%;
    }
    @media screen and (min-width: 1024px){
        width: 28%;
    }
    @media screen and (min-width: 1349px){
        width: 20%;
    }

    @keyframes jump {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
}
`;

Card.Image = styled.img`
    border-radius: 10px;
    height: 65%;
    width: 100%;
    object-fit: cover;
    object-position: center;
`;

Card.Pokemon = styled.h2`
    margin: 0;
    padding: 5%;
    text-align: center;
    font-size: 1rem;
    height: 20%;
    width: 100%;
`;

Card.Number = styled.h5`
    margin: 0;
    border-top: 1px solid black;
    padding: 3%;
    text-align: center;
    font-size: 0.75rem;
    height: 5%;
    width: 100%;
`;

Card.Button = styled.button`
    border-radius: inherit;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primaryDark};
    font-weight: bold;
    margin: 0.5%;
    padding: 1%;
    font-size: 1rem;
    height: 9%;
    width: 99%;
    &:hover{
        cursor: pointer;
        background-color: #FFFFFF;
    }
`;

Card.Row = styled.section`
    align-items: center;
    background-color: #f6f6f6;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    margin: 2% 0 0 0;
    padding: 0 0 0 5%;
    @media screen and (min-width: 768px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: stretch;
        margin-left: 10%;
        margin-right: 10%;
    }
    @media screen and (min-width: 1024px){
        margin-left: 6%;
        margin-right: 6%;
    }
    @media screen and (min-width: 1349px){
        margin-left: 8%;
        margin-right: 8%;
    }
`;

export default Card;