import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const LoginPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0% 10% 10% 10%;
  justify-content: center;
  display: flex;
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    padding: 20px;
  }
`;
