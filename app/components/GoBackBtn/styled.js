import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

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
