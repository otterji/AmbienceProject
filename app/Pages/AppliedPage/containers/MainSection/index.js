import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { replace } from 'connected-react-router';
import {
  FirstInquiryWrapper,
  InfoText,
  DescText,
  AddressWrapper,
} from './styled';
import DefaultButton from '../../../../components/DefaultButton';

const MainSection = () => {
  const dispatch = useDispatch();
  return (
    <FirstInquiryWrapper>
      <h2>문의가 접수되었습니다</h2>
      <hr />
      <Grid container>
        <Grid item xs={12} sm={12}>
          <AddressWrapper>
            <InfoText>풀릿에 문의 주셔서 감사합니다.</InfoText>
            <DescText>최대한 빠른 시일 안에 답변을 보내드리겠습니다.</DescText>
          </AddressWrapper>
          <DefaultButton
            content="홈으로"
            onClick={() => dispatch(replace('/'))}
          />
        </Grid>
      </Grid>
    </FirstInquiryWrapper>
  );
};
export default MainSection;
