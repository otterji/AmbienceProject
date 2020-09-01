import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-break: keep-all;
`;

export const StyledHeader = styled.header`
  top: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  backdrop-filter: blur(10px);
  background-color: rgba(254, 254, 254, 0.6);
  z-index: 10;
  align-items: center;
`;

export const Main = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 81px;
  /* max-width: 1920px; */
  ::before {
    margin: -35px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(20px);
    /* z-index: -1; */
  }
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    padding-top: 50px;
  }
`;

export const Footer = styled.div`
  /* position: fixed; */
  left: 0px;
  bottom: 0px;
  height: 214px;
  width: 100%;
`;

export const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
