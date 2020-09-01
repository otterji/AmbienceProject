import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const ImgWrapper = styled.img`
  width: 95%;
  padding-right: ${props => props.theme.spacing[2]};

  -webkit-filter: ${props =>
    props.isPerson ? 'grayscale(45%) brightness(110%)' : 'none'};
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    padding-right: ${props => props.theme.spacing[2]};
    width: 50%;
    object-fit: cover;
    height: 30%;
  }
`;

export const ProfileSummary = styled.div`
  margin-top: ${props => props.theme.spacing[2]};
  display: flex;
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
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
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: 10px;
  }
`;

export const Grade = styled.div`
  text-align: left;
  font-size: 14px;
  letter-spacing: -0.28px;
  color: #737e8a;
  opacity: 1;
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: 10px;
  }
`;

export const CardTitle = styled.div`
  text-align: left;
  font-size: ${props => props.fontSize}px;
  letter-spacing: -0.48px;
  color: #111314;
  font-weight: bold;
  padding-right: 10%;
  opacity: 1;
  margin-top: ${props => props.theme.spacing[1]};
  margin-bottom: ${props => props.theme.spacing[3]};
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
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
  padding-right: 10%;
  line-height: 25px;
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    display: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  /* padding-right: 5%; */
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    display: flex;
    margin-bottom: ${props => props.theme.spacing[1]};
    padding-right: 0;
  }
`;

export const DescriptionWrapper = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 5%;
`;
