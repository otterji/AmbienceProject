import React from 'react';
import Fade from '@material-ui/core/Fade';
import MainSection from './containers/MainSection';
import { DefaultPageWrapper } from '../../components/GlobalStyled/wrappers';
import { initPageScroll } from '../../utils/hooks';

const ContactPage = () => {
  initPageScroll();
  return (
    <Fade in timeout={1000}>
      <div>
        <DefaultPageWrapper>
          <MainSection />
        </DefaultPageWrapper>
      </div>
    </Fade>
  );
};

export default ContactPage;
