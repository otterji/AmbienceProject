import styled from 'styled-components';
import { DEVICE_SIZE, imgUrl } from '../../constants';

export const CardWrapper = styled.div`
  display: felx;
  /* width: 60%; */
  /* width: 40%; */
  /* height: 80%; */
  margin-top: 100px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  /* margin-bottom: 10%; */
  height: 500px;

  /* :first-child {
    margin-left: 20%;
  } */
  width: 100%;
  :last-child {
    margin-bottom: 10%;
  }

  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    margin-top: 50px;
    /* width: initial; */
    width: 80%;
    position: relative;
    margin-left: 20px;
    /* margin: 30px 20px 0px 20px; */
    background-position: right bottom;
    height: 350px;
    :first-child {
      display: flex;
      margin-left: 20px;
    }
    :last-child {
      /* margin-right: 20px; */
      margin-bottom: 50px;
    }
  }
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    margin-left: 10%;
    width: 90%;
    padding-right: 0;
    margin-top: 0;
  }
`;

export const CardContentsWrapper = styled.div`
  margin: 10px 20px 10px 20px;
  position: relative;
  /* overflow: hidden; */
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    margin: 5px 20px 10px 20px;
  }
`;

export const CardImg = styled.div`
  margin-top: 10px;
  height: 55%;
  background: imgUrl('profile_sunhyeong.png');
  background-size: cover;
  opacity: 1;
`;

export const ProfileSummary = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const Subject = styled.div`
  text-align: left;
  font: Black 14px;
  letter-spacing: -0.28px;
  font-weight: bold;
  color: #062ce9;
  opacity: 1;
  margin-right: 5px;
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
  text-align: left;
  font-size: 24px;
  letter-spacing: -0.48px;
  color: #111314;
  font-weight: bold;
  opacity: 1;
  margin-top: 5px;
  margin-bottom: 30px;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 16px;
  }
`;

export const CardDescription = styled.div`
  text-align: left;
  font-size: 15px;
  letter-spacing: -0.36px;
  color: #3e4549;
  opacity: 1;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 10px;
  }
`;

export const Test = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar {
    height: 0px;
    background: none;
  }
  /* &::-webkit-scrollbar {
    height: 0px;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 22px;
    opacity: 0.4;
  }
  &::-webkit-scrollbar-track {
    background: none;
  } */
`;
