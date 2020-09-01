import React from 'react';
import Fade from '@material-ui/core/Fade';
import { DefaultPageWrapper } from '../../components/GlobalStyled/wrappers';
import MainSection from './containers/mainsection';
import { initPageScroll } from '../../utils/hooks';

const ConsultingPage = () => {
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

export default ConsultingPage;
