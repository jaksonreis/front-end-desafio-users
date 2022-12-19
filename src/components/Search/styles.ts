import styled, { css } from 'styled-components';

interface Props {
  isFocused: boolean;
}

export const Container = styled.div<Props>`
display: flex;
  flex-direction: row;
  border-radius: 25px;  
  border: solid 1px ${({ theme }) => theme.colors.shape};
  background-color: ${({ theme }) => theme.colors.background_light};
${({ isFocused }) => isFocused && css`

box-shadow: 0 1px 2px ${({ theme }) => theme.colors.shape};
`};
`;

export const IconContainer = styled.div<Props>`
  display: flex;
  margin: 5px;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
border-radius: 15px;
 background-color: ${({ theme }) => theme.colors.color_info};
`;

export const InputText = styled.input<Props>`
    ::placeholder {
  color: ${({ theme }) => theme.colors.text_detail};
   }
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  border-style: none;
  border-radius: 25px; 
  border-style: none; 

  padding: 0 23px; 
${({ isFocused }) => isFocused && css`
    border: 0 none;
    outline: 0;

`};
`;