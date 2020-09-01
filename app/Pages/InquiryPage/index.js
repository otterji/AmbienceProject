import React, { useState, useEffect } from 'react';
import { FormControlLabel, Checkbox, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Fade from '@material-ui/core/Fade';
import { InquiryPageWrapper } from './styled';
import MainSection from './containers/MainSection';
import InputSection from './containers/InputSection';
import { subjectData } from './containers/InputSection/constants';
import DefaultButton from '../../components/DefaultButton';
import AgreeDialog from './containers/AgreeDialog';
import { postConsultAction } from './actions';
import reducer, { initialState } from './reducer';
import saga from './saga';
import { initPageScroll } from '../../utils/hooks';

const key = 'inquiry';

const InquiryPage = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  initPageScroll();

  const dispatch = useDispatch();
  const inquiryState = useSelector(state => state.inquiry || initialState);
  const schoolSelectorState = useSelector(
    state => state.schoolSelector || { schoolId: null },
  );
  const { loading } = inquiryState;
  const { schoolId } = schoolSelectorState;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState('');
  const [learning, setLearning] = useState('');
  const [desc, setDesc] = useState('');
  const [gradeValue, setGradeValue] = useState(1);
  const [subject, setSubject] = useState(subjectData);
  const [school, setSchool] = useState(null);

  const [agreed, setAgreed] = useState(false);
  const [agreeOpen, setAgreeOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubject = subjectValue => {
    const current = [...subject];
    const targetIndex = current.findIndex(x => x.value === subjectValue.value);
    const target = current[targetIndex];
    current.splice(targetIndex, 1, {
      ...target,
      checked: !subjectValue.checked,
    });
    setSubject(current);
  };

  const validateEmail = _email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmailError(!re.test(String(_email).toLowerCase()));
  };

  const onClickApply = () => {
    const subjectList = subject
      .filter(x => x.checked === true)
      .map(y => y.value);
    const joined = subjectList.join('/');
    const consult = {
      name,
      email,
      schoolId,
      phone: phone.formattedValue,
      grade: gradeValue,
      category: joined,
      precedence: learning,
      extra: desc,
    };
    dispatch(postConsultAction(consult));
  };

  return (
    <Fade in timeout={1000}>
      <div>
        <InquiryPageWrapper>
          <AgreeDialog
            open={agreeOpen}
            handleClose={() => setAgreeOpen(false)}
            onClickAgree={() => {
              setAgreeOpen(false);
              setAgreed(true);
            }}
          />
          <MainSection />
          <InputSection
            name={name}
            email={email}
            isEmailError={isEmailError}
            phone={phone}
            learning={learning}
            desc={desc}
            subject={subject}
            handleSubject={handleSubject}
            gradeValue={gradeValue}
            onChangeName={x => setName(x)}
            onChangePhone={x => setPhone(x)}
            onChangeEmail={x => {
              setEmail(x);
              validateEmail(x);
            }}
            onChangeLearning={x => setLearning(x)}
            onChangeDesc={x => setDesc(x)}
            onChangeSchool={x => setSchool(x)}
            handleGradeChange={e => {
              setGradeValue(Number(e.target.value));
            }}
          />
          <Grid>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={agreed}
                  onChange={() => {
                    if (agreed) {
                      setAgreed(false);
                      setAgreeOpen(!agreeOpen);
                    }
                    setAgreeOpen(!agreeOpen);
                  }}
                />
              }
              label="개인정보 수집 및 처리에 동의합니다"
            />
          </Grid>
          <br />
          <Grid>
            <DefaultButton
              onClick={onClickApply}
              loading={loading}
              disabled={
                name.length === 0 ||
                phone.length === 0 ||
                email.length === 0 ||
                subject.filter(x => x.checked === true).length === 0 ||
                !agreed
              }
            />
          </Grid>
        </InquiryPageWrapper>
      </div>
    </Fade>
  );
};

export default InquiryPage;
