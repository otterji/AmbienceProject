import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { DEVICE_SIZE } from '../../constants';

export const StyledGrid = styled(Grid)`
  margin-bottom: 10%;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    margin-bottom: 20%;
  }
`;
