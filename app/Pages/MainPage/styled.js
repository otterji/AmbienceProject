import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';
import landing2 from '../../assets/img/landing2.png';

export const MainVisionPageWrapper = styled.div`
  position: relative;
  top: 0;
  /* z-index: -1; */
  overflow: hidden;
  /* &::before {
    content: '';
    width: 100%;
    height: 80%;
    position: absolute;
    z-index: -1;
    bottom: 0;
    right: 0;
    background-image: url(${mainVision});
    background-size: cover;
    background-position: right bottom;
  } */
  height: calc(100vh - 151px);

  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    position: relative;
    top: 0;
    margin-top: 0px;
    height: calc(100vh - 150px);
    /* &::before {
      content: '';
      width: 100%;
      height: 45%;
      position: absolute;
      z-index: -1;
      background-image: url(${mainVision});
      background-size: cover;
      background-position: right bottom;
    } */
  }
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    height: 736px;
  }
`;

export const MainENTPageWrapper = styled.div`
  top: 0;

  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    top: 0;
    margin-top: 0px;
    height: auto;
  }
`;

export const StyledLine = styled.div`
  width: 100%;
  display: flex;
  flex-basis: 100%;
  color: ${props => props.theme.grey[3]};
  padding-top: 5%;
  ::after {
    content: '';
    flex-grow: 1;
    background: ${props => props.theme.grey[2]};
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0 10% 0 10%;
  }
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
    padding-top: 0px;
    ::after {
      content: '';
      flex-grow: 1;
      background: ${props => props.theme.grey[2]};
      height: 1px;
      font-size: 0px;
      line-height: 0px;
      margin: 0 20px 0 20px;
    }
  }
`;

export const MainRNDPageWrapper = styled.div`
  position: relative;
  top: 0;
  background: url('https://sumisa-canvas-test.s3.ap-northeast-2.amazonaws.com/assets/img/mainRND.png');
  background-size: cover;
  /* height: calc(100vh); */

  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    position: relative;
    top: 0;
    margin-top: 0px;
    height: 1024px;
    background-position: center;
  }

  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    height: 736px;
  }
`;

export const MainIconWrapper = styled.div`
  display: block;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 5% 10% 5% 10%;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    padding-bottom: 0;
  }
`;

export const MainNumbersWrapper = styled.div`
  display: block;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 5%;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    padding-top: 5%;
    padding-bottom: 10%;
  }
`;

export const MainLandingPageWrapper = styled.div`
  position: relative;
  top: 0;
  z-index: -1;
  overflow: hidden;
  height: 100%;
  justify-content: center;
  display: flex;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    background-image: url(${landing2});
    background-size: cover;
    background-position: right bottom;
  }
  height: calc(100vh - 101px);
  background: linear-gradient(215deg, #020b3d, #031676);
  background-size: 400% 400%;
  -webkit-animation: AnimationName 15s ease infinite;
  -moz-animation: AnimationName 15s ease infinite;
  -o-animation: AnimationName 15s ease infinite;
  animation: AnimationName 15s ease infinite;
  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 30%;
    }
    50% {
      background-position: 100% 71%;
    }
    100% {
      background-position: 0% 30%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 30%;
    }
    50% {
      background-position: 100% 71%;
    }
    100% {
      background-position: 0% 30%;
    }
  }
  @-o-keyframes AnimationName {
    0% {
      background-position: 0% 30%;
    }
    50% {
      background-position: 100% 71%;
    }
    100% {
      background-position: 0% 30%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 30%;
    }
    50% {
      background-position: 100% 71%;
    }
    100% {
      background-position: 0% 30%;
    }
  }

  @media only screen and (max-width: 768px) {
    height: 1024px;
    justify-content: flex-start;
    display: block;
  }

  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    height: 736px;
    justify-content: flex-start;
    display: block;
  }
`;
