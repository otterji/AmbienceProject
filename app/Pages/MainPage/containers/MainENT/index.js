import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import {
  TopBlueText,
  Title,
  Details,
  ViewMore,
  TextWrapper,
  GridWrapper,
  TopBlueSubText,
} from './styled';
import MainNumbers from '../MainNumbers';

export default function MainENT() {
  const dispatch = useDispatch();

  return (
    <>
      <TextWrapper>
        <div style={{ display: 'flex' }}>
          <TopBlueText>pulit education & trends : </TopBlueText>
          <TopBlueSubText> consulting</TopBlueSubText>
        </div>
        <Title>교육 컨설팅 : 자녀의 성장을 함께 이끌어 갑니다.</Title>
        <Details>
          축적된 데이터와 분야별 최고의 컨설턴트를 통하여, 수준 높은 교육 컨설팅
          서비스를 제공하고 있습니다.
        </Details>
        <ViewMore onClick={() => dispatch(push('/consultant'))}>
          풀릿의 컨설팅
        </ViewMore>
      </TextWrapper>
      <GridWrapper>
        <Grid container>
          <MainNumbers />
          {/* {consultantData.map(x => (
            <Grid item xs={12} sm={4} key={x.id}>
              <DefaultProfileCard
                subject={x.type}
                grade={x.grade}
                title={x.name}
                description={x.intro}
                img={x.profileImg}
                onClick={() => dispatch(push(`/consultant/${x.id}`))}
              />
            </Grid>
          ))} */}
        </Grid>
      </GridWrapper>
    </>
  );
}
