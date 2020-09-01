import React from 'react';
import {
  TopBlueText,
  Title,
  Details,
  TextWrapper,
  StyledDot,
  DetailOne,
  DetailList,
} from './styled';

export default function MainLanding() {
  return (
    <TextWrapper>
      <TopBlueText>pulit</TopBlueText>
      <Title>우리는 교육의 과거, 현재와 미래를 이끌어 갑니다.</Title>
      <Details>
        <DetailOne />
        <div style={{ display: 'flex' }}>
          <StyledDot>·</StyledDot>
          <DetailList>교육의 과거를 분석하고 고찰합니다. </DetailList>
        </div>
        <div style={{ display: 'flex' }}>
          <StyledDot>·</StyledDot>
          <DetailList>교육의 현재를 소통을 통하여 공유합니다. </DetailList>
        </div>
        <div style={{ display: 'flex' }}>
          <StyledDot>·</StyledDot>
          <DetailList>교육의 미래를 기술로 개발해 나갑니다.</DetailList>
        </div>
      </Details>
    </TextWrapper>
  );
}
