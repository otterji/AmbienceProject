import React from 'react';
import Fade from '@material-ui/core/Fade';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import NumberFormat from 'react-number-format';
import logo from '../../../../assets/img/logos/pulitLogo.svg';
import { initialState } from '../../reducer';
import {
  LeftImgWrapper,
  Title,
  Description,
  InputLabel,
  InputTextField,
  LoginBtn,
  CancleBtn,
  PhoneInput,
} from '../../styled';

export const FindId = ({
  onChangeName,
  onChangePhoneNumber,
  onClickFindId,
  isFounded,
}) => {
  const dispatch = useDispatch();
  const onClickHandler = value => {
    dispatch(push(`/${value}`));
  };

  const findState = useSelector(state => state.find || initialState);
  const foundedEmail = findState.get('foundId');

  return (
    <Fade in timeout={1000}>
      <>
        <LeftImgWrapper onClick={() => onClickHandler('')}>
          <img src={logo} alt="mainLogo" />
        </LeftImgWrapper>
        {isFounded ? (
          <>
            <Title>회원님의 이메일은 {foundedEmail} 입니다</Title>
            <CancleBtn onClick={() => onClickHandler('login')}>
              돌아가기
            </CancleBtn>
          </>
        ) : (
          <>
            <Title>아이디 찾기</Title>
            <Description />
            <InputLabel>이름</InputLabel>
            <InputTextField
              placeholder="홍길동"
              onChange={e => onChangeName(e.target.value)}
            />
            <InputLabel>휴대폰 번호</InputLabel>
            <NumberFormat
              onValueChange={x => onChangePhoneNumber(x.formattedValue)}
              customInput={PhoneInput}
              format="###-####-####"
              placeholder="010-1234-5678"
            />
            <Description />
            <LoginBtn onClick={() => onClickFindId()}>완료</LoginBtn>
            <CancleBtn onClick={() => onClickHandler('login')}>취소</CancleBtn>
          </>
        )}
      </>
    </Fade>
  );
};
