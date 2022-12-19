import { createContext, ReactNode, useContext, useState } from 'react';
import { UsersProps } from '../dtos/usersDTO';
import instance from '../services/api';


interface UsersProviderProps {
    children: ReactNode;
}
interface IUsersContextData {
    loading: boolean;
    users: UsersProps[];
    getUsers: () => void;

}

const UsersContext = createContext({} as IUsersContextData);

export const UsersProvider = ({ children }: UsersProviderProps) => {

    const [users, setUsers] = useState<UsersProps[]>([] as UsersProps[]);
    const [loading, setLoading] = useState(false);

    async function getUsers() {
        setLoading(true);
            console.log("passei");
        try {
            const { data } = await instance.get('/users');
            setUsers(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <UsersContext.Provider value={{ loading, users, getUsers }}>
            {children}
        </UsersContext.Provider>

    )
}


export function useData() {
    const context = useContext(UsersContext);
    return context;
}
