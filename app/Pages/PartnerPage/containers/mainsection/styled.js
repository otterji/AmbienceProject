import styled from 'styled-components';
import { DEVICE_SIZE } from '../../../../constants';

export const AddressWrapper = styled.div`
  margin-top: ${props => props.theme.spacing[3]};
`;
export const ServiceName = styled.h4`
  margin-bottom: ${props => props.theme.spacing[3]};
`;
export const InfoText = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textColor.grey[1]};
  margin-bottom: ${props => props.theme.spacing[1]};
`;

export const DescText = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textColor.grey[0]};
  margin-bottom: ${props => props.theme.spacing[1]};
`;

export const BannerTextWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
