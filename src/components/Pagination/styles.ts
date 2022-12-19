import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
margin-top: 24px;
justify-content: space-between;
align-items: center;
`;

export const Stack = styled.div`
display: flex;
flex-direction: row;
padding: 20px 0;
justify-content: center;
align-items: center;
`;

export const Button = styled.button`
border: 1px solid ${({ theme })=> theme.colors.border};
width: 25px;
height: 30px;
font-size: 15px;
  background-color: ${ ({ theme })=> theme.colors.background_light};
  color: ${ ({ theme })=> theme.colors.color_info};
  :hover {background-color: ${({theme})=> theme.colors.shape};}
  :active {
  transform: translateY(1px);
}
`
export const ButtonActive = styled.button`
width: 25px;
height: 30px;
border-style: none;
font-size: 15px;
color: white;
  background-color: ${({theme})=> theme.colors.color_info};
  :active {
  transform: translateY(1px);
}
`

export const Box = styled.div`
`

export const Text = styled.p`
margin: 5px;
font-size: 14px;
text-align: center;
color: ${({ theme }) => theme.colors.text_detail};
`