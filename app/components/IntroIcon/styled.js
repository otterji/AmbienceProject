import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const ImgWrapper = styled.img`
  width: 100%;
  /* padding-right: ${props => props.theme.spacing[2]}; */
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    width: 100%;
    object-fit: cover;
    height: 30%;
    display: flex;
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
  text-align: center;
  font-size: 1.5vw;
  letter-spacing: -0.48px;
  color: #111314;
  font-weight: bold;
  opacity: 1;
  margin-top: ${props => props.theme.spacing[1]};
  margin-bottom: ${props => props.theme.spacing[3]};
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 16px;
    margin-bottom: ${props => props.theme.spacing[1]};
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
  margin-bottom: 50px;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 12px;
  }
`;

export const ResponsiveWrapper = styled.div`
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  padding: 15%;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    margin-bottom: ${props => props.theme.spacing[1]};
    margin-right: 0;
  }
`;

export const DescriptionWrapper = styled.div`
  display: block;
`;
