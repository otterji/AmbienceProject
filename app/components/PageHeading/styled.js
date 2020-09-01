import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const LogoImg = styled.img`
  height: 35px;
  margin-bottom: 10px;
  width: auto;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    height: 25px;
  }
`;

export const BackArrowWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  height: 35px;
  margin-bottom: 10px;
  width: auto;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    height: 25px;
  }
`;

export const Heading = styled.div`
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 17px;
  }
`;
