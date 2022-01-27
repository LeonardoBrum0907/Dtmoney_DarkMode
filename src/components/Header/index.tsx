import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
    toggleTheme(): void;
}

export function Header({onOpenNewTransactionModal, toggleTheme}: HeaderProps) {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />

                <Switch 
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={13}
                    width={40}
                    handleDiameter={20}
                    offColor= {colors.secudaryBlueLight}
                    onColor= {colors.secudaryBlueLight}
                />

                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}