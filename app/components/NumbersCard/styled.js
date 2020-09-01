import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const ImgWrapper = styled.img`
  width: 100%;
  /* padding-right: ${props => props.theme.spacing[2]}; */
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    width: 50%;
    object-fit: cover;
    height: 30%;
  }
`;

export const ProfileSummary = styled.div`
  margin-top: ${props => props.theme.spacing[2]};
  display: flex;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    margin-top: ${props => props.theme.spacing[1]};
  }
`;

export const Subject = styled.div`
  text-align: left;
  font: Black 14px;
  letter-spacing: -0.28px;
  font-weight: bold;
  color: #062ce9;
  opacity: 1;
  margin-right: ${props => props.theme.spacing[1]};
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 10px;
  }
`;

export const Grade = styled.div`
  text-align: left;
  font-size: 14px;
  letter-spacing: -0.28px;
  color: #737e8a;
  opacity: 1;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 10px;
  }
`;

export const CardTitle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Neuton:wght@800&display=swap');
  text-align: center;
  font-size: 5vw;
  font-weight: bold;
  opacity: 1;
  margin-top: ${props => props.theme.spacing[1]};
  margin-bottom: ${props => props.theme.spacing[1]};
  font-family: 'Neuton', serif;
  letter-spacing: -1.8px;
  color: #062ce9;
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: 50px;
    margin-bottom: ${props => props.theme.spacing[1]};
  }
`;

export const Unit = styled.div`
  text-align: center;
  letter-spacing: -0.72px;
  color: #111314;
  opacity: 1;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing[3]};
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    margin-bottom: ${props => props.theme.spacing[2]};
    font-size: 25px;
  }
`;

export const CardDescription = styled.div`
  text-align: left;
  font-size: 15px;
  letter-spacing: -0.36px;
  color: #3e4549;
  opacity: 1;
  line-height: 25px;
  text-align: center;
  padding: 10%;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    padding-top: 0;
    padding-bottom: 0;
    font-size: 12px;
  }
`;

export const ResponsiveWrapper = styled.div`
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  padding: 5%;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    display: flex;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  padding: 10%;
  display: block;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    padding: 5% 5% 0% 5%;
    :last-child {
      padding-bottom: 10%;
    }
  }
`;
