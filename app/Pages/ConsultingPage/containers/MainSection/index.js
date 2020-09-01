import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import entLogo from '../../../../assets/img/logos/entLogo.png';
import PageHeading from '../../../../components/PageHeading';
import DefaultProfileCard from '../../../../components/DefaultProfileCard';
import Banner from '../../../../components/Banner';
import { consultantData } from '../../constants';

const MainSection = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(push(`/apply`));
  };
  return (
    <>
      <PageHeading displayLogo logo={entLogo} title="풀릿의 교육 전문가" />
      <Grid container>
        {consultantData.map(x => (
          <Grid item xs={12} sm={3} key={x.id}>
            <DefaultProfileCard
              subject={x.type}
              grade={x.grade}
              title={x.name}
              description={x.intro}
              img={x.profileImg}
              onClick={() => dispatch(push(`/consultant/${x.id}`))}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid container style={{ marginTop: '10%' }} spacing={2}>
          <Grid item xs={12} sm={12}>
            <Banner
              onClick={onClickHandler}
              topText="풀릿 에듀케이션 & 트렌즈"
              middleText="교육을 분석해온 전문가들에게 컨설팅을 받아 볼 수 있습니다."
              baseText="교육 컨설팅 문의 >"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MainSection;
