import React, { useState, useEffect } from 'react';
import Fade from '@material-ui/core/Fade';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { LoginPageWrapper } from './styled';
import { InputSection } from './containers/InputSection';
import AgreeDialog from './containers/AgreeDialog';
import AddressDialog from './containers/AddressDialog';
import { interestedData } from './containers/InputSection/constants';
import reducer, { initialState } from './reducer';
import saga from './saga';
import { getDuplicateMemberAction } from './actions';

const key = 'signUp';

export default function SignUpPage() {
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [email, setEmail] = useState('');
  const [isEmailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState(0);
  const [birth, setBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  // 관심항목 리스트
  const [interests, setInterests] = useState(interestedData);
  const [interestValue, setInterestValue] = useState(1);
  // 이메일수신동의
  const [emailAgreed, setEmailAgreed] = useState(false);
  // 개인정보 동의 (팝업오픈/동의여부)
  const [agreeOpen, setAgreeOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [addressOpen, setAddressOpen] = useState(false);

  const onClickHandler = value => {
    dispatch(push(`/${value}`));
  };

  const nameInput = {
    onChange: e => setName(e.target.value),
    value: name,
    placeholder: '이름',
  };

  const signupState = useSelector(state => state.signUp) || initialState;
  const isDuplicated = signupState.get('isDuplicated');
  // const isDuplicated = signupState.get('loading');

  const validateEmail = _email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmailError(!re.test(String(_email).toLowerCase()));
  };

  const handleInterests = interests => {
    const current = [...interests];
    const targetIndex = current.findIndex(x => x.value === interests.value);
    const target = current[targetIndex];
    current.splice(targetIndex, 1, {
      ...target,
      checked: !interests.checked,
    });
    setInterests(current);
  };

  const checkEmail = _email => {
    dispatch(getDuplicateMemberAction(_email));
  };

  return (
    <Fade in timeout={1000}>
      <LoginPageWrapper>
        <AgreeDialog
          open={agreeOpen}
          handleClose={() => setAgreeOpen(false)}
          onClickAgree={() => {
            setAgreeOpen(false);
            setAgreed(true);
          }}
        />
        <AddressDialog
          open={addressOpen}
          handleClose={() => setAddressOpen(false)}
        />
        <InputSection
          address={address}
          name={name}
          isDuplicated={isDuplicated}
          email={email}
          nameInput={nameInput}
          isEmailError={isEmailError}
          agreeOpen={agreeOpen}
          emailAgreed={emailAgreed}
          agreed={agreed}
          interests={interests}
          interestValue={interestValue}
          checkEmail={() => checkEmail(email)}
          onChangeEmail={x => {
            setEmail(x);
            validateEmail(x);
          }}
          onChangePassword={x => setPassword(x)}
          onChangeName={x => setName(x)}
          onChangeGender={x => setGender(x)}
          onChangeBirth={x => setBirth(x)}
          onChangePhoneNumber={x => setPhoneNumber(x)}
          onChangeAddress={x => setAddress(x)}
          onChangeInterests={x => setInterests(x)}
          onChangeEmailAgree={x => setEmailAgreed(x)}
          onChangeAgree={x => setAgreed(x)}
          onChangeAgreeOpen={x => setAgreeOpen(x)}
          onChangeAddressOpen={x => setAddressOpen(x)}
          handleInterests={e => {
            setInterestValue(Number(e.target.value));
          }}
        />
      </LoginPageWrapper>
    </Fade>
  );
}
