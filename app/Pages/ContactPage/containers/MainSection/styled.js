import styled from 'styled-components';
import consultBg from './images/consultBg.png';
import partnerBg from './images/partnerBg.png';
import { DEVICE_SIZE } from '../../../../constants';

export const FirstInquiryWrapper = styled.div``;
export const AddressWrapper = styled.div`
  margin-top: ${props => props.theme.spacing[3]};
`;
export const ServiceName = styled.h4`
  margin-bottom: ${props => props.theme.spacing[3]};
`;
export const AddressText = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textColor.grey[0]};
  margin-bottom: ${props => props.theme.spacing[1]};
`;

export const ConsultButton = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-image: url(${consultBg});
  background-size: cover;
  height: 300px;
  transition: opacity 0.3s ease-in-out;
  opacity: 1;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    height: 150px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const PartnerButton = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-image: url(${partnerBg});
  background-size: cover;
  transition: opacity 0.3s ease-in-out;
  opacity: 1;
  height: 300px;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    height: 150px;
  }
  &:hover {
    opacity: 0.8;
  }
`;
