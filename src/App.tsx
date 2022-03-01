import { GlobalStyle } from './styles/global'
import { AllRoutes } from './routes/routes'
import { ContextProvider } from './context/Context'

export function App() {
  return (
    <>
      <ContextProvider>
        <GlobalStyle />
        <AllRoutes />
      </ContextProvider>
    </>
  );
}
