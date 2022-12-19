import { UsersProps } from '../../dtos/usersDTO';

import {
  Container,
  Data,
} from './styles';

interface Props {
  data: UsersProps;
}

export function ListItem({ data }: Props) {
  return (
      <Container>
        <Data>{data.id}</Data>
        <Data>{data.name}</Data>
        <Data>{data.username}</Data>
        <Data>{data.email}</Data>
      </Container>
  );
}