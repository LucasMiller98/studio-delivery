import { GlobalStyle } from './styles/global'
import { Routes } from './routes/routes'
import { ContextProvider } from './context/Context'

export function App() {
  return (
    <>
      <ContextProvider>
        <GlobalStyle />
        <Routes />
      </ContextProvider>
    </>
  );
}
