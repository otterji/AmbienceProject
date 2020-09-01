import styled from 'styled-components';
import { TextField, Grid } from '@material-ui/core';
import KakaoLogin from 'react-kakao-login';
import { DEVICE_SIZE } from '../../constants';

export const InputWrapper = styled(Grid)`
  margin-top: ${props => props.theme.spacing[3]};
`;

export const Input = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1%;
`;

Input.Label = styled.label`
  font-size: 14px;
  margin-bottom: ${props => props.theme.spacing[1]};
  color: ${props => props.theme.textColor[1]};
`;

Input.TextField = styled.input`
  border: 1px
    ${props => (!props.error ? props.theme.grey[2] : props.theme.error.main)}
    solid;
  height: 38px;
  padding: 5px;
  padding-left: 10px;
  /* transition: all 0.2s ease-in; */
  /* box-sizing: border-box; */
  width: 300px;
  &:focus {
    border: 2px ${props => (!props.error ? 'black' : props.theme.error.main)}
      solid;
    outline: none !important;
    /* box-sizing: border-box; */
  }
`;

Input.ErrorText = styled.span`
  display: block;
  font-size: 12px;
  color: ${props => props.theme.error.main};
`;

Input.TextArea = styled.textarea`
  outline: 1px ${props => props.theme.grey[2]} solid;
  height: 100px;
  padding: 10px;
  &:focus {
    border: 2px black solid;
    outline: none !important;
  }
`;

export const LoginBtn = styled.div`
  border: 1px
    ${props => (!props.error ? props.theme.grey[2] : props.theme.error.main)}
    solid;
  width: 90%;
  height: 38px;
  padding: 5px;
  padding-left: 10px;
  margin-bottom: 1%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 1px solid ${props => props.theme.primary.main};
  color: #fff;
  text-align: center;
  line-height: 1.8;
  font-weight: bold;
  background-color: ${props => props.theme.primary.main};
  /* &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${props => props.theme.primary.main};
    color: #fff;
  } */
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
  }
`;

export const SignUpBtn = styled.div`
  border: 1px
    ${props => (!props.error ? props.theme.grey[2] : props.theme.error.main)}
    solid;
  width: 90%;
  height: 38px;
  padding: 5px;
  padding-left: 10px;
  margin-bottom: 1%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 1px solid ${props => props.theme.primary.main};
  color: ${props => props.theme.primary.main};
  text-align: center;
  line-height: 1.8;
  font-weight: bold;
  /* &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${props => props.theme.primary.main};
    color: #fff;
  } */
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
  }
`;

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

export const LoginWrapper = styled.div`
  width: 40%;
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
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
      display: none;
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

export const InputLabel = styled.label`
  font-size: 14px;
  margin-bottom: ${props => props.theme.spacing[3]};
  color: ${props => props.theme.textColor[1]};
  font-weight: bold;
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

export const KakaoLoginBtn = styled(KakaoLogin)`
  width: 90%;
  height: 38px;
  padding: 5px;
  padding-left: 10px;
  margin-bottom: 1%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: center;
  background: #f2d700 0% 0% no-repeat padding-box;
  opacity: 1;
  font-weight: bold;
  color: #3e4549;
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
  }
`;

export const SimpleLoginText = styled.div`
  width: 90%;
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: ${props => props.theme.grey[3]};
  margin: 8px 0px;
  text-align: center;
  ::before {
    content: '';
    flex-grow: 1;
    background: ${props => props.theme.grey[3]};
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 5px;
  }
  ::after {
    content: '';
    flex-grow: 1;
    background: ${props => props.theme.grey[3]};
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 5px;
  }
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
  }
`;

export const FindWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
  }
`;
