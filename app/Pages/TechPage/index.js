import React from 'react';
import Fade from '@material-ui/core/Fade';
import { DefaultPageWrapper } from '../../components/GlobalStyled/wrappers';
import MainSection from './containers/MainSection';
import { initPageScroll } from '../../utils/hooks';

const TechPage = () => {
  initPageScroll();
  return (
    <DefaultPageWrapper>
      <Fade in timeout={1000}>
        <div>
          <MainSection />
        </div>
      </Fade>
    </DefaultPageWrapper>
  );
};

export default TechPage;
