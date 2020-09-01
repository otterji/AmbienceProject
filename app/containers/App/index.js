/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from '../../Pages/NotFoundPage/Loadable';
import MainPage from '../../Pages/MainPage';
import ContactPage from '../../Pages/ContactPage';

import { StyledApp, StyledHeader, Main, Footer, PageWrapper } from './styled';

import HeaderContainer from '../HeaderContainer';
import FooterContainer from '../FooterContainer';
import InquiryPage from '../../Pages/InquiryPage';
import ConsultingPage from '../../Pages/ConsultingPage';
import Modal from '../../components/Modal';
import AppliedPage from '../../Pages/AppliedPage';
import TechPage from '../../Pages/TechPage';
import PartnerPage from '../../Pages/PartnerPage';
import TrendPage from '../../Pages/TrendPage';
import ArticlePage from '../../Pages/ArticlePage ';
import GlobalStyle from '../../global-styles';
import ConsultantDetailPage from '../../Pages/ConsultantDetailPage';
import MemberPage from '../../Pages/MemberPage';
import LoginPage from '../../Pages/LoginPage';
import SignUpPage from '../../Pages/SignUpPage';
import { FindPage } from '../../Pages/FindPage';

export default function App() {
  return (
    <StyledApp>
      <PageWrapper>
        <Modal />
        <StyledHeader>
          <HeaderContainer />
        </StyledHeader>
        <Switch>
          <Main>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/consultant" component={ConsultingPage} />
            <Route
              path="/consultant/:consultantId"
              component={ConsultantDetailPage}
            />
            <Route path="/contacts" component={ContactPage} />
            <Route path="/apply" component={InquiryPage} />
            <Route path="/applied" component={AppliedPage} />
            <Route path="/technology" component={TechPage} />
            <Route path="/member/:memberId" component={MemberPage} />
            <Route path="/partner" component={PartnerPage} />
            <Route exact path="/trend" component={TrendPage} />
            <Route path="/trend/:articleId" component={ArticlePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/find/:type" component={FindPage} />
          </Main>
          <Route component={NotFoundPage} />
        </Switch>
        <Footer>
          <FooterContainer />
        </Footer>
      </PageWrapper>
      <GlobalStyle />
    </StyledApp>
  );
}
