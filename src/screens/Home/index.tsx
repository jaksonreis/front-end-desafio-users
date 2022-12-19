
import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { ListUsers } from '../../components/ListUsers';
import { Spinner } from '../../components/Spinner';
import { useData } from '../../hooks/users';


import {
    Container

} from './styles';

export function Home() {
    const { loading, users, getUsers } = useData();

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <Container>
            <Header />  {
                loading ?
                    <Spinner /> : <ListUsers />

            }

        </Container>
    );
}
