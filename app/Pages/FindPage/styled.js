import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const LoginPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0% 10% 10% 10%;
  justify-content: center;
  display: flex;
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    padding: 20px;
  }
`;

export const InputErrorText = styled.span`
  font-size: 12px;
  color: ${props => props.theme.error.main};
  display: block;
`;

export const LoginWrapper = styled.div`
  width: 40%;
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
  }
`;

export const PhoneInput = styled.input`
  border: 1px ${props => props.theme.grey[2]} solid;
  height: 38px;
  padding: 5px;
  padding-left: 10px;
  /* transition: all 0.2s ease-in; */
  box-sizing: border-box;
  &:focus {
    border: 2px black solid;
    outline: none !important;
    /* box-sizing: border-box; */
  }
`;

export const LeftImgWrapper = styled.div`
  align-items: center;
  display: flex;
  img {
    width: auto;
    height: 35px;
    margin-top: 13.5px;
    align-items: center;
    display: flex;
    cursor: pointer;
    @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
      width: 25px;
      height: 25px;
      margin-top: 0px;
    }
  }
`;

export const Title = styled.div`
  text-align: left;
  font-size: 24px;
  letter-spacing: -0.48px;
  color: #111314;
  font-weight: bold;
  padding-bottom: ${props => props.theme.spacing[1]};
  opacity: 1;
  margin-top: ${props => props.theme.spacing[1]};
  margin-bottom: ${props => props.theme.spacing[3]};
  border-bottom: 1px solid gray;
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: 16px;
    margin-bottom: ${props => props.theme.spacing[1]};
  }
`;

export const Description = styled.div`
  text-align: left;
  font-size: 15px;
  letter-spacing: -0.36px;
  color: #3e4549;
  opacity: 1;
  padding-right: 15%;
  line-height: 25px;
  padding-bottom: ${props => props.theme.spacing[2]};
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: 10px;
  }
`;

export const InputLabel = styled.div`
  font-size: 14px;
  margin-bottom: ${props => props.theme.spacing[1]};
  margin-top: ${props => props.theme.spacing[1]};
  color: ${props => props.theme.textColor[1]};
  font-weight: bold;
  width: 100%;
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
  }
`;

export const InputTextField = styled.input`
  border: 1px
    ${props => (!props.error ? props.theme.grey[2] : props.theme.error.main)}
    solid;
  height: 38px;
  padding: 5px;
  padding-left: 10px;
  /* transition: all 0.2s ease-in; */
  /* box-sizing: border-box; */
  width: 90%;
  &:focus {
    border: 2px ${props => (!props.error ? 'black' : props.theme.error.main)}
      solid;
    outline: none !important;
    /* box-sizing: border-box; */
  }
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
  }
`;

export const LoginBtn = styled.div`
  width: 90%;
  height: 38px;
  padding: 5px;
  padding-left: 10px;
  margin-bottom: 1%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 1px solid ${props => props.theme.primary.main};
  text-align: center;
  line-height: 1.8;
  font-weight: bold;
  background-color: ${props => props.theme.primary.main};
  color: #fff;
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
  }
`;

export const CancleBtn = styled.div`
  width: 90%;
  height: 38px;
  padding: 5px;
  padding-left: 10px;
  margin-bottom: 1%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${props => props.theme.grey[4]};
  text-align: center;
  line-height: 1.8;
  font-weight: bold;
  border: 1px solid ${props => props.theme.grey[4]};
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
  }
`;
