import styled from 'styled-components';

export const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
  background-color: ${({ theme })=> theme.colors.background_primary};

`;

export const LogoContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;


export const TextLogo = styled.h1`
color: ${({theme})=>theme.colors.text_light};

`

export const ImgLogo = styled.img`
height: 50px;
margin: 10px;


`

export const ImgProfile = styled.img`
height: 60px;
width: 60px;
border-radius: 30px;
margin: 10px;

`