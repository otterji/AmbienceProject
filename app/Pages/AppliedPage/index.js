import React from 'react';
import Fade from '@material-ui/core/Fade';
import { ApppliedPageWrapper } from './styled';
import MainSection from './containers/MainSection';

const AppliedPage = () => (
  <Fade in timeout={1000}>
    <div>
      <ApppliedPageWrapper>
        <MainSection />
      </ApppliedPageWrapper>
    </div>
  </Fade>
);

export default AppliedPage;
