import React, { useState, useEffect } from 'react';
import Fade from '@material-ui/core/Fade';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { LoginPageWrapper, LoginWrapper } from './styled';
import { FindId } from './container/FindId';
import { FindPw } from './container/FindPassword';
import reducer, { initialState } from './reducer';
import saga from './saga';
import { findIdAction, findPasswordAction, resetIdAction } from './actions';

const key = 'find';

export const FindPage = ({ match }) => {
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isEmailError, setEmailError] = useState(false);
  const [isFounded, setIsFounded] = useState(false);

  useEffect(() => () => dispatch(resetIdAction()), []);

  const validateEmail = _email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmailError(!re.test(String(_email).toLowerCase()));
  };
  const onSubmitId = () => {
    dispatch(findIdAction({ name, phoneNumber }));
    setIsFounded(true);
  };

  const onSubmitPw = () => {
    dispatch(findPasswordAction({ email, phoneNumber }));
  };

  const { type } = match.params;

  return (
    <Fade in timeout={1000}>
      <LoginPageWrapper>
        <LoginWrapper>
          {type === 'Id' ? (
            <FindId
              onChangeName={x => setName(x)}
              onChangePhoneNumber={x => setPhoneNumber(x)}
              onClickFindId={() => onSubmitId()}
              isFounded={isFounded}
            />
          ) : (
            <FindPw
              email
              isEmailError={isEmailError}
              onChangeEmail={x => {
                setEmail(x);
                validateEmail(x);
              }}
              phoneNumber
              onChangePhoneNumber={x => setPhoneNumber(x)}
              onClickFindPw={x => onSubmitPw(x)}
            />
          )}
        </LoginWrapper>
      </LoginPageWrapper>
    </Fade>
  );
};
