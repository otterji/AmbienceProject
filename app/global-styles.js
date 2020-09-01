import { createGlobalStyle } from 'styled-components';
import { DEVICE_SIZE } from './constants';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap');
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Noto Sans KR', sans-serif;
  }

  #app {
    width: 99vw;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 28px;
    @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 20px;
    line-height: 30px;
    }
  }


  p {
    line-height: 1.5rem;
  }

  .react-select-container{
    height: 40px;
  }



`;

export default GlobalStyle;
