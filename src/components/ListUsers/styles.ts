import styled, { css } from 'styled-components';

export const Container = styled.div`
width: 100vw;
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  padding: 0 20px;`;


export const BoxTable = styled.div`
margin-top: 10px;
  width: 70%;
`;

export const ContentTable = styled.div`
overflow: auto;
`;

export const TitleTable = styled.h2`
font-size: 18px;
font-weight: 400;
color: ${({ theme }) => theme.colors.title};
`;


export const Table = styled.table`
width: 100%;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.colors.background_light};
box-shadow: 0 1px 5px ${({ theme }) => theme.colors.border};
padding:  15px;
  border-collapse: separate; 
  border-spacing: 0;
  `
export const Header = styled.th`
  height: 30px;
  width: 40px;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text_detail};
  `
export const HeaderStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
  height: 15px;
  `
export const SearchContainer = styled.div`
padding: 10px 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: ${({ theme }) => theme.colors.background_light};
  `
export const Row = styled.tr`
  `
export const Thead = styled.thead`
  `
