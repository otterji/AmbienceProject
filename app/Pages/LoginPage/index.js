import React, { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import { push } from 'connected-react-router';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useDispatch } from 'react-redux';
import {
  Input,
  LoginBtn,
  SignUpBtn,
  LoginPageWrapper,
  LeftImgWrapper,
  Title,
  Description,
  LoginWrapper,
  InputTextField,
  InputLabel,
  SimpleLoginText,
  KakaoLoginBtn,
  FindWrapper,
} from './styled';

import logo from '../../assets/img/logos/pulitLogo.svg';
import { initPageScroll } from '../../utils/hooks';
import { loginAction, kakoLoginAction } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'login';

export default function LoginPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  initPageScroll();

  const responseKaKao = res => {
    console.log(JSON.stringify(res));
    dispatch(kakoLoginAction());
    // {"response":{"access_token":"NLUcOTDhRdDeWF4IDb2e5QwPCIUh0dvUGW4_nQo9cpcAAAFzsx4VVw","token_type":"bearer","refresh_token":"XlP8uffS38BiN_6z0lAepcUfI5NkSsLIUr1TFAo9cpcAAAFzsx4VVg","expires_in":7199,"scope":"profile","refresh_token_expires_in":5183999},"profile":{"id":1440882211,"connected_at":"2020-08-03T06:58:35Z","properties":{"nickname":"영지","profile_image":"http://k.kakaocdn.net/dn/cMIJeT/btqEXI0UmjW/U7dDr0cYfzPJBYfizmlcF1/img_640x640.jpg","thumbnail_image":"http://k.kakaocdn.net/dn/cMIJeT/btqEXI0UmjW/U7dDr0cYfzPJBYfizmlcF1/img_110x110.jpg"},"kakao_account":{"profile_needs_agreement":false,"profile":{"nickname":"영지","thumbnail_image_url":"http://k.kakaocdn.net/dn/cMIJeT/btqEXI0UmjW/U7dDr0cYfzPJBYfizmlcF1/img_110x110.jpg","profile_image_url":"http://k.kakaocdn.net/dn/cMIJeT/btqEXI0UmjW/U7dDr0cYfzPJBYfizmlcF1/img_640x640.jpg"}}}}
  };

  const responseFail = err => {
    alert(err);
  };

  const dispatch = useDispatch();

  const onClickHandler = value => {
    dispatch(push(`/${value}`));
  };

  const [isEmailError, setEmailError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('0');

  const validateEmail = _email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmailError(!re.test(String(_email).toLowerCase()));
  };

  const onChangeEmail = e => {
    setEmail(e);
    validateEmail(e);
  };

  const onClickLogin = () => {
    const payload = { email, password };
    dispatch(loginAction(payload));
  };

  return (
    <Fade in timeout={1000}>
      <LoginPageWrapper>
        <LoginWrapper>
          <LeftImgWrapper onClick={() => onClickHandler('')}>
            <img src={logo} alt="mainLogo" />
          </LeftImgWrapper>
          <Title>로그인</Title>
          <Description>
            풀릿의 교육 정보, 교육 컨설팅 서비스, 교육 기술에 대한 정보를
            받아보실 수 있습니다.
          </Description>
          <div style={{ marginBottom: '10px', marginTop: '10px' }}>
            <InputLabel>이메일 주소</InputLabel>
          </div>

          <InputTextField
            onChange={e => onChangeEmail(e.target.value)}
            type="email"
            error={isEmailError}
            value={email}
            placeholder="abcd@gmail.com"
          />
          {isEmailError ? (
            <Input.ErrorText>이메일 형식에 맞게 입력해주세요</Input.ErrorText>
          ) : (
            ''
          )}
          <br />
          <div style={{ marginBottom: '10px', marginTop: '10px' }}>
            <InputLabel>비밀번호</InputLabel>
          </div>
          <InputTextField
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <div style={{ marginBottom: '10px', marginTop: '30px' }}>
            <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
          </div>
          <SignUpBtn onClick={() => onClickHandler('signup')}>
            풀릿 회원가입
          </SignUpBtn>
          <SimpleLoginText>간편 로그인</SimpleLoginText>
          <KakaoLoginBtn
            jsKey="41607a605eebc73eae5d2c36b9c759c7"
            onFailure={responseFail}
            onSuccess={responseKaKao}
          >
            카카오계정 로그인
          </KakaoLoginBtn>
          <FindWrapper>
            <div
              style={{ padding: '10px', cursor: 'pointer' }}
              onClick={() => onClickHandler('find/Id')}
            >
              아이디 찾기
            </div>
            <div style={{ padding: '10px' }}>|</div>
            <div
              style={{ padding: '10px', cursor: 'pointer' }}
              onClick={() => onClickHandler('find/Pw')}
            >
              비밀번호 찾기
            </div>
          </FindWrapper>
        </LoginWrapper>
      </LoginPageWrapper>
    </Fade>
  );
}
