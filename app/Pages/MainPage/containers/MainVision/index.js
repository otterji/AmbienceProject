import React from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import {
  TopBlueText,
  Title,
  Details,
  ViewMore,
  TextWrapper,
  TopBlueSubText,
} from './styled';
import Banner from '../../../../components/Banner';
import { imgUrl } from '../../../../constants';

export default function MainVision() {
  const dispatch = useDispatch();

  return (
    <TextWrapper>
      <div style={{ display: 'flex' }}>
        <TopBlueText>pulit education & Trends : </TopBlueText>
        <TopBlueSubText>research</TopBlueSubText>
      </div>
      <Title>교육 분석 : 교육의 트렌드를 이끌어 갑니다.</Title>
      <Details>
        풀릿은 대한민국 교육의 트렌드(Trend)와 일시적 유행(Fad)을 구분하고,
        과거와 현재에 대한 고찰을 통해서 미래 교육의 모습을 예상합니다.
      </Details>
      <ViewMore onClick={() => dispatch(push('/trend'))}>
        풀릿의 교육 분석
      </ViewMore>
      <Banner backgroundImg={imgUrl('mainVision2.png')} />
    </TextWrapper>
  );
}
