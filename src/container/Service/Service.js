import styled from "styled-components";

export const ServiceContainer = styled.div`
    position: relative;
`;

export const ServiceContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .hero_section{
        align-self:center;
        margin: 93px 0;
    } 
    .hero_title{
        font-weight: 600;
        font-size: 48px;
        text-align: center;
        color: #030762
    }

    .hero_subtitle{
        font-size: 24px;
        text-align: center;
        color: #505050;
        width: 485px;
        height: 87px;
    }
`;

