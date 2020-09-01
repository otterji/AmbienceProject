import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const ApppliedPageWrapper = styled.div`
  padding: 5% 10% 10% 10%;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    padding: ${props => props.theme.spacing[2]};
  }
`;
