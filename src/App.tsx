import { AppHeader } from './components/AppHeader';
import { AppMain } from './components/AppMain';
import { ContextProvider } from './contexts/gameContext';

export const App = () => {
  return (
    <>
      <ContextProvider>
        <AppHeader />
        <AppMain />
      </ContextProvider>
    </>
  );
};
