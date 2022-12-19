import { useState } from 'react';
import { UsersProps } from '../../dtos/usersDTO';
import { useData } from '../../hooks/users';
import { ListItem } from '../ListItem';
import { Pagination } from '../Pagination';
import { Search } from '../Search';

import {
  Container,
  Table,
  Header,
  HeaderStyle,
  Row,
  SearchContainer,
  TitleTable,
  Thead,
  BoxTable,
  ContentTable
} from './styles';



export function ListUsers() {
  const { users } = useData()
  const [page, setPage] = useState(1)
  const [infoFilter, setInfoFilter] = useState("")

  //Quantidade de Usuários exibidos por páginas
  const perPage = 5;

  const pageStart = (page - 1) * perPage

  const pageEnd = pageStart + perPage;

  function showFiltered(user: UsersProps) {
    return (
      String(user.id).concat(user.name, user.username, user.email).toUpperCase().includes(infoFilter)
    )
  }



  return (
    <Container>
      <SearchContainer>
        <Search onChange={setInfoFilter} />
      </SearchContainer>
      <BoxTable>
        {
          users.length > 0 ?
            <TitleTable> Tabela de Usuários </TitleTable> :
            <TitleTable>Falha ao conectar no servidor. Recarregue a pagina.</TitleTable>
        }
        <ContentTable>
          <Table>
            <Thead>
              <Row>
                <Header><HeaderStyle>#</HeaderStyle></Header>
                <Header><HeaderStyle>Nome</HeaderStyle></Header>
                <Header><HeaderStyle>Username</HeaderStyle></Header>
                <Header><HeaderStyle>Email</HeaderStyle></Header>

              </Row>
            </Thead>
            <tbody>

              {

                users.length > 0 &&
                users.filter(showFiltered).slice(pageStart, pageEnd).map((element, index, array) =>
                  <ListItem key={index} data={element} />
                )

              }


            </tbody>
          </Table>
        </ContentTable>

        <Pagination
          totalCountOfRegisters={
            users.length > 0 ? users.filter(showFiltered).length : 0
          }

          registersPerPage={perPage}
          currentPage={page}
          onPageChange={setPage}
        />
      </BoxTable>
    </Container>
  );
}