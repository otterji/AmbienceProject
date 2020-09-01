import React from 'react';
import {
  TextField,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
} from '@material-ui/core';
import NumberFormat from 'react-number-format';
import { InputWrapper, Input, PhoneInput } from './styled';
import { gradeData } from './constants';
import { theme } from '../../../../constants';
import SchoolSelector from '../../../../components/SchoolSelector';

const InputSection = ({
  name,
  phone,
  email,
  gradeValue,
  subject,
  learning,
  desc,
  handleSubject,
  onChangeName,
  onChangeEmail,
  onChangeSchool,
  onChangePhone,
  onChangeLearning,
  onChangeDesc,
  handleGradeChange,
  isEmailError,
}) => (
  <InputWrapper container>
    <Grid container>
      <Grid item xs={12} md={6}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} md={6}>
            <Input>
              <Input.Label>학생 이름*</Input.Label>
              <Input.TextField
                value={name}
                placeholder="홍길동"
                onChange={e => onChangeName(e.target.value)}
              />
            </Input>
          </Grid>
          <Grid item xs={12} md={6}>
            <Input>
              <Input.Label>학부모 H.P*</Input.Label>
              {/* <Input.TextField
            value={phone}
            placeholder="010-1234-5678"
            onChange={e => onChangePhone(e.target.value)}
          /> */}
              <NumberFormat
                onValueChange={x => onChangePhone(x)}
                customInput={PhoneInput}
                format="###-####-####"
                placeholder="010-1234-5678"
              />
            </Input>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12} md={6}>
        <Input>
          <Input.Label>학교*</Input.Label>
          {/* <Input.TextField placeholder="잠신초" /> */}
          <SchoolSelector onChange={onChangeSchool} />
        </Input>
        <Input>
          <Input.Label>이메일 주소*</Input.Label>
          <Input.TextField
            type="email"
            placeholder="abcd@gmail.com"
            value={email}
            error={isEmailError}
            onChange={e => onChangeEmail(e.target.value)}
          />
          {isEmailError ? (
            <Input.ErrorText>이메일 형식에 맞게 입력해주세요</Input.ErrorText>
          ) : (
            ''
          )}
        </Input>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item md={6} xs={12}>
        <Input>
          <Input.Label>학년*</Input.Label>
          <RadioGroup onChange={handleGradeChange} value={gradeValue} row>
            {gradeData.map(x => (
              <FormControlLabel
                value={x.id}
                key={x.id}
                control={<Radio color="primary" label={x.name} />}
                label={x.name}
                style={{ marginRight: 20 }}
              />
            ))}
          </RadioGroup>
        </Input>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item md={6} xs={12}>
        <Input>
          <Input.Label>희망 컨설팅 분류*</Input.Label>
          <FormGroup row>
            {subject.map(x => (
              <FormControlLabel
                key={x.value}
                control={
                  <Checkbox
                    color="primary"
                    checked={x.checked}
                    onChange={() => handleSubject(x)}
                    name={x.name}
                  />
                }
                label={x.name}
              />
            ))}
          </FormGroup>
        </Input>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12} md={6}>
        <Input>
          <Input.Label>자녀의 선행상태</Input.Label>
          <Input.TextArea
            value={learning}
            placeholder="예) 미적분"
            onChange={e => onChangeLearning(e.target.value)}
          />
        </Input>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12} md={6}>
        <Input>
          <Input.Label>추가사항</Input.Label>
          <Input.TextArea
            value={desc}
            placeholder="예) 아이가 집중을 잘 못해요"
            onChange={e => onChangeDesc(e.target.value)}
          />
        </Input>
      </Grid>
    </Grid>
  </InputWrapper>
);

export default InputSection;
