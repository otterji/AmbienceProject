import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { TopBlueText, Title, Details, ViewMore, TextWrapper } from './styled';

export default function MainVision() {
  const dispatch = useDispatch();

  return (
    <TextWrapper>
      <TopBlueText>pulitsoft</TopBlueText>
      <Title>교육 기술 : 교육의 기술력을 이끌어 갑니다.</Title>
      <Details>
        시간과 공간의 개념을 넘어선 효율적인 교육 환경으로 거듭할 교육
        소프트웨어를 개발해 갑니다.
      </Details>
      <ViewMore onClick={() => dispatch(push('/technology'))}>
        풀릿의 R&D{' '}
      </ViewMore>
    </TextWrapper>
  );
}
