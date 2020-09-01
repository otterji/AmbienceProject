import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const FooterWrapper = styled.div`
  margin: 50px 10% 54px 10%;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    margin: 75px 20px 30px 20px;
  }
`;

export const TextAndAddressWrapper = styled.div`
  display: block;
`;

export const Title = styled.div`
  font-size: 12px;
  letter-spacing: -0.2px;
  opacity: 1;
  font-weight: bold;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 10px;
  }
`;

export const Address = styled.div`
  color: #737e8a;
  font-size: 12px;
  margin-top: 10px;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 10px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const StyledBtn = styled.div`
  font-size: 12px;
  letter-spacing: -0.2px;
  color: #111314;
  opacity: 1;
  display: flex;
  cursor: pointer;
  :nth-child(2) {
    margin-left: 30px;
  }
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 10px;
  }
`;

export const CopyrightWrapper = styled.div`
  border-top: 1px solid #dee0e3;
  display: block;
  font-size: 8px;
  margin-top: 15px;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    /* margin-right: 20px; */
  }
`;

export const CopyrightText = styled.div`
  margin-top: 10px;
`;
