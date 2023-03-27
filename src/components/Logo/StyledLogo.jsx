import styled from "styled-components";

export const LogoContainer = styled.div`
    display: flex;
    width: 100px;
    padding: 10px 0;
`;

export const LogoImg = styled.img`
    height: 100px;
    width: 100px;
    
    @media screen and (max-width: 600px) {
        height: 70px;
        width: 70px;
    }

    @media screen and (max-width: 450px) {
        height: 50px;
        width: 50px;
    }
`;