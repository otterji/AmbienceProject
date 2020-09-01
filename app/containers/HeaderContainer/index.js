import React from 'react';
import useReactRouter from 'use-react-router';
import Toolbar from '../../components/Toolbar/Toolbar';
import { HeaderContainerWrapper, LoginHeaderContainerWrapper } from './styled';

const HeaderContainer = () => {
  const { location } = useReactRouter();
  const isLogin = () =>
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/find/Id' ||
    location.pathname === '/find/Pw';
  return isLogin() ? (
    <LoginHeaderContainerWrapper>
      <Toolbar />
    </LoginHeaderContainerWrapper>
  ) : (
    <HeaderContainerWrapper>
      <Toolbar />
    </HeaderContainerWrapper>
  );
};
export default HeaderContainer;
