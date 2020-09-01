import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { DEVICE_SIZE } from '../../../../constants';

export const StyledGrid = styled(Grid)`
  margin-right: 10px;
`;

export const GridWrapper = styled.div`
  :last-child {
    padding-right: 0;
  }
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    padding: ${props => props.theme.spacing[2]};
  }
`;

export const TextWrapper = styled.div`
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 60px;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    padding-top: 60px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const TopBlueText = styled.div`
  text-align: left;
  letter-spacing: -0.2px;
  color: #062ce9;
  opacity: 1;
  font-size: 108x;
  font-weight: bold;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 12px;
  }
`;

export const Title = styled.div`
  margin-top: 10px;
  text-align: left;
  letter-spacing: -0.36px;
  color: #111314;
  opacity: 1;
  font-weight: bold;
  font-size: 36px;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 24px;
  }
`;

export const Details = styled.div`
  margin-top: 20px;
  text-align: left;
  letter-spacing: -0.2px;
  color: #111314;
  opacity: 1;
  font-size: 18px;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 12px;
    width: 289px;
    line-height: 22px;
  }
`;

export const ViewMore = styled.div`
  display: block;
  padding-top: ${props => props.theme.spacing[3]};
  text-align: left;
  letter-spacing: -0.2px;
  color: #062ce9;
  opacity: 1;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    margin-top: 20px;
    font-size: 12px;
  }
`;

export const ProfileSection = styled.div`
  background-color: ${props => props.theme.grey[1]};
  height: calc(100vh - 235px);
  display: flex;
  position: relative;

  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    height: auto;
    /* height: 75%; */
    /* width: 280%; */
    /* overflow: scroll; */
  }
`;
