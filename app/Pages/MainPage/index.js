import React from 'react';
import Fade from '@material-ui/core/Fade';
import MainVision from './containers/MainVision';
import {
  MainVisionPageWrapper,
  MainENTPageWrapper,
  MainRNDPageWrapper,
  MainLandingPageWrapper,
  StyledLine,
} from './styled';
import MainENT from './containers/MainENT';
import MainRND from './containers/MainRND';
import MainLanding from './containers/MainLanding';

export default function MainPage() {
  return (
    <Fade in timeout={1000}>
      <div>
        <MainLandingPageWrapper>
          <MainLanding />
        </MainLandingPageWrapper>
        <MainVisionPageWrapper>
          <MainVision />
        </MainVisionPageWrapper>
        <StyledLine />
        <MainENTPageWrapper>
          <MainENT />
        </MainENTPageWrapper>
        <MainRNDPageWrapper>
          <MainRND />
        </MainRNDPageWrapper>
      </div>
    </Fade>
  );
}
