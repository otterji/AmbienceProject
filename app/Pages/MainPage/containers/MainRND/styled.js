import styled from 'styled-components';
import { DEVICE_SIZE } from '../../../../constants';

export const TextWrapper = styled.div`
  padding-top: 20%;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 15%;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    padding-top: 40%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const TopBlueText = styled.div`
  text-align: left;
  letter-spacing: -0.2px;
  color: ${props => props.theme.primary.light};
  opacity: 1;
  font-size: 18px;
  font-weight: bold;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 12px;
  }
`;

export const Title = styled.div`
  margin-top: 10px;
  text-align: left;
  letter-spacing: -0.36px;
  color: #ffffff;
  opacity: 1;
  font-weight: bold;
  font-size: 36px;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 24px;
  }
`;

export const Details = styled.div`
  margin-top: 10px;
  text-align: left;
  letter-spacing: -0.2px;
  color: #ffffff;
  opacity: 1;
  font-size: 18px;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 12px;
    width: 289px;
  }
`;

export const ViewMore = styled.div`
  margin-top: 50px;
  text-align: center;
  background: ${props => props.theme.primary.light};
  opacity: 1;
  letter-spacing: -0.2px;
  color: white;
  width: 180px;
  height: 50px;
  font-size: 16px;
  /* font-weight: bold; */
  border-radius: 5px;
  cursor: pointer;
  z-index: 200;
  line-height: 3.1;
  display: inline-block;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    transition: all 0.4s ease-in-out;
    opacity: 0.95;
  }
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    width: 120px;
    height: 30px;
    line-height: 2.5;
    margin-top: 40px;
    font-size: 12px;
    margin-bottom: 20%;
  }
`;
