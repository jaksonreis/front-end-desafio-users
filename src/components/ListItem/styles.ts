import styled, { css } from 'styled-components';


export const Container = styled.tr`
&:hover {
background-color: ${({theme})=> theme.colors.color_info + "20"};
}
`;

export const Data = styled.td`
text-align: center;
padding: 15px;
font-size: 15px;
color: ${({ theme })=> theme.colors.text_detail};
border-top: 1px solid ${({ theme })=> theme.colors.border};

`