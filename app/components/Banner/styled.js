import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Heading = styled.div`
  width: 100%;
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

export const Details = styled.div`
  font-size: 18px;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 10px;
  }
`;

export const BannerTextWrapper = styled.div`
  display: block;
  width: 100%;
  padding: 10%;
`;
