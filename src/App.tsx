import { Home } from './screens/Home'

import { ThemeProvider } from 'styled-components'
import { UsersProvider } from './hooks/users'

import theme from './global/styles/theme'

export default function App() {

  return (

    <ThemeProvider theme={theme}>
      <UsersProvider>
        <Home />
      </UsersProvider>
    </ThemeProvider>

  );
}

