import styled from "styled-components";

export const StyledHome = styled.div`
    background: #f8f8f8;
    
    .mensage{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 12.438em;
        background: linear-gradient(0deg, rgba(35, 35, 35, 0.65), rgba(35, 35, 35, 0.65)), url(sasha-kaunas-hEAGekaiJ8g-unsplash.jpg);
    }

    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        list-style: none;
        background: #FFFFFF;
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
        border-radius: 10px;

        min-width: 22.375em;
        min-height: 29.625em;
        max-width: 22.375em;
        max-height: 29.625em;
        margin: 30px;
    }

    .card > img{
        width: 298px;
        height: 158.67px;
        border-radius: 10px;
    }

    .card > div {
        display: flex;
        flex-direction: column;
        width: 90%;
        gap: 1em;
    }
    .card > div >  h3{
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
    }

    .card > div > p{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }

    .card > div > span{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }


    .card > button{
        background: #E6E6E6;
        border-radius: 100%;
    }
`