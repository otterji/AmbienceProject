import React from 'react';
import { Grid } from '@material-ui/core';
import PageHeading from '../../../../components/PageHeading';
import DefaultProfileCard from '../../../../components/DefaultProfileCard';
import Banner from '../../../../components/Banner';
import { sendMail } from '../../../../utils/request';
import { imgUrl } from '../../../../constants';

const MainSection = () => {
  const onClickHandler = () => {
    sendMail();
  };
  return (
    <>
      <PageHeading displayLogo title="풀릿의 파트너" />
      <Grid container>
        <Grid item xs={12} sm={3}>
          <DefaultProfileCard
            img={imgUrl('partnershipSumisa.png')}
            title="수학에 미친 사람들"
            subject="수학 교육"
            description="(주)수학에 미친사람들은 대치본관을 시작으로 현재는 수도권에 10개 지점을 보유한 대형 브랜드 수학학원입니다. 5년 연속 헤럴드 경제에서 주관하는 한국 소비자 만족지수 1위를 수상하였습니다."
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <DefaultProfileCard
            img={imgUrl('PartnershipKNS.png')}
            title="KNS어학원"
            subject="영어 교육"
            description="KNS어학원은 대치, 송파, 서초권에서 다년간의 노하우를 쌓아왔으며, 학교별 전문적인 과정과 강사들이 배치 되어 있습니다."
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid container style={{ marginTop: '10%' }} spacing={2}>
          <Grid item xs={12} sm={12}>
            <Banner
              onClick={onClickHandler}
              topText="풀릿 파트너쉽"
              middleText="교육의 발전을 위해서라면 그 누구와도 함께 합니다."
              baseText="파트너쉽 문의 >"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MainSection;
