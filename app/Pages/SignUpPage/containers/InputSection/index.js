import React, { useState, useEffect } from 'react';
import Fade from '@material-ui/core/Fade';
import {
  TextField,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import NumberFormat from 'react-number-format';
import logo from '../../../../assets/img/logos/pulitLogo.svg';
import { interestedData, gender } from './constants';

import {
  LoginWrapper,
  LeftImgWrapper,
  Title,
  Description,
  InputLabel,
  InputTextField,
  LoginBtn,
  CancleBtn,
  PhoneInput,
  InputErrorText,
  DuplicateBtn,
  DuplicatedText,
} from './styled';

export const InputSection = ({
  address,
  email,
  name,
  isEmailError,
  agreeOpen,
  emailAgreed,
  agreed,
  isDuplicated,
  checkEmail,
  onChangeEmail,
  onChangePassword,
  onChangeName,
  onChangeGender,
  onChangeBirth,
  onChangePhoneNumber,
  onChangeAddress,
  onChangeInterests,
  onChangeEmailAgree,
  onChangeAgree,
  onChangeAddressOpen,
  onChangeAgreeOpen,
  handleInterests,
  interests,
  interestValue,
  nameInput,
}) => {
  const dispatch = useDispatch();
  const onClickHandler = value => {
    dispatch(push(`/${value}`));
  };

  const [renderText, setRenderText] = useState(false);

  return (
    <>
      <LoginWrapper>
        <LeftImgWrapper onClick={() => onClickHandler('')}>
          <img src={logo} alt="mainLogo" />
        </LeftImgWrapper>
        <Title>회원가입</Title>
        <Description>(*) 별표 기호는 필수 항목임을 뜻합니다.</Description>
        <InputLabel>이메일 주소*</InputLabel>
        <Description>
          풀릿 관련 서비스 이용 시, 로그인 아이디로 사용됩니다.
        </Description>
        {/* 중복확인 */}
        <InputTextField
          type="email"
          placeholder="abcd@gmail.com"
          error={isEmailError}
          onChange={e => onChangeEmail(e.target.value)}
        />
        <div style={{ display: 'flex' }}>
          <DuplicateBtn
            onClick={() => {
              checkEmail(email);
              setRenderText(true);
            }}
          >
            중복확인
          </DuplicateBtn>
          {renderText ? (
            isDuplicated ? (
              <DuplicatedText isDuplicated={isDuplicated}>
                이미 존재하는 이메일입니다.
              </DuplicatedText>
            ) : (
              <DuplicatedText isDuplicated={isDuplicated}>
                사용 가능한 이메일입니다
              </DuplicatedText>
            )
          ) : null}
        </div>
        {isEmailError ? (
          <InputErrorText>이메일 형식에 맞게 입력해주세요</InputErrorText>
        ) : (
          ''
        )}
        <InputLabel>비밀번호*</InputLabel>
        <InputTextField
          type="password"
          onChange={e => onChangePassword(e.target.value)}
        />
        <InputLabel>비밀번호 확인*</InputLabel>
        <InputTextField type="password" />
        <InputLabel>이름*</InputLabel>
        <InputTextField {...nameInput} />
        <InputLabel>성별*</InputLabel>
        <RadioGroup row>
          {gender.map(x => (
            <FormControlLabel
              checked={x.id}
              value={x.id}
              key={x.id}
              control={<Radio color="primary" label={x.name} />}
              label={x.name}
              style={{ marginRight: 20 }}
            />
          ))}
        </RadioGroup>
        <InputLabel>생년월일*</InputLabel>
        <TextField
          id="date"
          type="date"
          defaultValue="1980-01-01"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={e => onChangeBirth(e.target.value)}
        />
        <InputLabel>휴대폰 번호*</InputLabel>
        <NumberFormat
          onValueChange={x => onChangePhoneNumber(x)}
          customInput={PhoneInput}
          format="###-####-####"
          placeholder="010-1234-5678"
        />
        <InputLabel>주소 (선택)</InputLabel>

        <InputTextField
          value={address}
          onClick={() => onChangeAddressOpen(true)}
          onChange={e => onChangeAddress(e.target.value)}
        />
        {/* 라디오태그로 */}
        <InputLabel>관심 항목 (선택)</InputLabel>
        <RadioGroup onChange={handleInterests} value={interestValue} row>
          {interestedData.map(x => (
            <FormControlLabel
              value={x.id}
              key={x.id}
              control={<Radio color="primary" label={x.name} />}
              label={x.name}
              style={{ marginRight: 20 }}
            />
          ))}
        </RadioGroup>
        <div style={{ display: 'flex' }}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={emailAgreed}
                onChange={() => onChangeEmailAgree(!emailAgreed)}
              />
            }
            label="이메일 수신 동의 (선택)"
          />
        </div>

        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={agreed}
              onChange={() => {
                if (agreed) {
                  onChangeAgree(false);
                  onChangeAgreeOpen(!agreeOpen);
                }
                onChangeAgreeOpen(!agreeOpen);
              }}
            />
          }
          label="개인정보 수집 및 처리에 동의합니다"
        />
        <LoginBtn>완료</LoginBtn>
        <CancleBtn onClick={() => onClickHandler('login')}>취소</CancleBtn>
      </LoginWrapper>
    </>
  );
};
