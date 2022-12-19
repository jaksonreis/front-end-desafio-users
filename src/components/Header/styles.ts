import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme})=>theme.colors.header};

`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BackgroundLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%);
  border-radius: 10px;
   width: 40px;
  height: 40px;
  margin: 10px;
`;


export const TextLogo = styled.h1`
color: ${({theme})=>theme.colors.text_light};
font-size: 18px;
font-weight: 300;
cursor: pointer;

`

export const ImgLogo = styled.img`
height: 20px;


`