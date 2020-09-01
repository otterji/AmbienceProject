import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const HeaderContainerWrapper = styled.div`
  width: 100%;
  height: 80px;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    height: 50px;
  }
`;

export const LoginHeaderContainerWrapper = styled.div`
  display: none;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    display: block;
    width: 100%;
    height: 50px;
  }
`;
