import { useState } from 'react';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './hooks/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import {  TransactionsProvider } from '../src/hooks/useTransactions';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');


export function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const [isNewTransactionModalOpen, setIsNewTrasanctionModalOpen] = useState(false);


    function handleOpenNewTransactionModal() {
        setIsNewTrasanctionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTrasanctionModalOpen(false);
    }
    return (
    <ThemeProvider theme={theme}> 
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} toggleTheme={toggleTheme}/>
        <Dashboard />

        <NewTransactionModal  
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}      
        />

        <GlobalStyle />
      </TransactionsProvider>
    </ThemeProvider>
  );
}

