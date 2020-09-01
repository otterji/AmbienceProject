import React from 'react';
import Fade from '@material-ui/core/Fade';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import NumberFormat from 'react-number-format';
import logo from '../../../../assets/img/logos/pulitLogo.svg';

import {
  LeftImgWrapper,
  Title,
  Description,
  InputLabel,
  InputTextField,
  LoginBtn,
  CancleBtn,
  PhoneInput,
  InputErrorText,
} from '../../styled';

export const FindPw = ({
  email,
  isEmailError,
  onChangeEmail,
  phoneNumber,
  onChangePhoneNumber,
  onClickFindPw,
}) => {
  const dispatch = useDispatch();
  const onClickHandler = value => {
    dispatch(push(`/${value}`));
  };

  return (
    <Fade in timeout={1000}>
      <>
        <LeftImgWrapper onClick={() => onClickHandler('')}>
          <img src={logo} alt="mainLogo" />
        </LeftImgWrapper>
        <Title>비밀번호 찾기</Title>
        <Description>휴대폰 번호로 임시 비밀번호가 발송됩니다.</Description>
        <InputLabel>이메일 주소</InputLabel>
        <InputTextField
          type="email"
          placeholder="abcd@gmail.com"
          error={isEmailError}
          onChange={e => onChangeEmail(e.target.value)}
        />
        {isEmailError ? (
          <InputErrorText>이메일 형식에 맞게 입력해주세요</InputErrorText>
        ) : (
          ''
        )}
        <InputLabel>휴대폰 번호</InputLabel>
        <NumberFormat
          onValueChange={x => onChangePhoneNumber(x.formattedValue)}
          customInput={PhoneInput}
          format="###-####-####"
          placeholder="010-1234-5678"
        />
        <Description />
        <LoginBtn onClick={() => onClickFindPw()}>완료</LoginBtn>
        <CancleBtn onClick={() => onClickHandler('login')}>취소</CancleBtn>
      </>
    </Fade>
  );
};
