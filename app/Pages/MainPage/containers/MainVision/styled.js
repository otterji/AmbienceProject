import styled from 'styled-components';
import { DEVICE_SIZE } from '../../../../constants';

export const TextWrapper = styled.div`
  padding: 5% 10% 5% 10%;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    padding: 100px 20px 0px 20px;
  }
`;

export const TopBlueText = styled.div`
  text-align: left;
  letter-spacing: -0.2px;
  color: #062ce9;
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
  color: #111314;
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
  color: #111314;
  opacity: 1;
  font-size: 18px;
  line-height: 28px;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    line-height: 22px;
    font-size: 12px;
    width: 289px;
  }
`;

export const TopBlueSubText = styled.div`
  text-align: left;
  letter-spacing: -0.2px;
  color: #062ce9;
  opacity: 1;
  font-size: 18px;
  margin-left: 5px;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 12px;
    margin-left: 3px;
  }
`;

export const ViewMore = styled.div`
  margin-top: 50px;
  text-align: center;
  background: #062ce9 0% 0% no-repeat padding-box;
  opacity: 1;
  letter-spacing: -0.2px;
  color: white;
  width: 180px;
  height: 50px;
  font-size: 16px;
  /* font-weight: bold; */
  cursor: pointer;
  z-index: 200;
  line-height: 3.1;
  display: inline-block;
  margin-bottom: 5%;
  transition: opacity 0.3s ease-in-out;
  border-radius: 5px;
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
