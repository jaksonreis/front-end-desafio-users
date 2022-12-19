import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
`;


export const Container = styled.div`
position: fixed;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
`;

export const SpinnerLoader = styled.div`
border: 10px solid #f3f3f3;
border-top: 10px solid ${({ theme }) => theme.colors.color_info};
border-radius: 50%;
width: 80px;
height: 80px;
animation: ${rotate} 1s linear infinite;
`;
