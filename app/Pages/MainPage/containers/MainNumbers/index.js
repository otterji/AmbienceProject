import React from 'react';
import { Grid } from '@material-ui/core';
import { GridWrapper } from './styled';
import NumbersCard from '../../../../components/NumbersCard';

export default function MainNumbers() {
  return (
    <>
      <GridWrapper>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <NumbersCard
              number="16"
              unit="년 동안"
              description="대치, 서초, 송파 등 교육의 중심에서 경험을 쌓아왔습니다."
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <NumbersCard
              number="+14,700"
              unit="명의 학생들을"
              description="학생들을 대상으로 K-12 정규 과정 교육을 전달했습니다."
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <NumbersCard
              number="+2,100"
              unit="회의 설명회를"
              description="학부모들에게 입시 등 교육과정 설명회를 통하여 교육이란 퍼즐을 함께 풀어나갔습니다."
            />
          </Grid>
        </Grid>
      </GridWrapper>
    </>
  );
}
