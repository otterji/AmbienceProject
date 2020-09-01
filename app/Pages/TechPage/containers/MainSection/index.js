import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import styled from 'styled-components';
import softLogo from '../../../../assets/img/logos/softLogo.png';
import PageHeading from '../../../../components/PageHeading';
import DefaultProfileCard from '../../../../components/DefaultProfileCard';
import Banner from '../../../../components/Banner';
import { Container } from './styled';
import { memberData } from '../../constant';
import { groupList } from '../../../../utils/groupList';
import { DEVICE_SIZE } from '../../../../constants';

const MainSection = () => {
  const dispatch = useDispatch();
  const memberList = groupList({ targetList: memberData, count: 4 });

  const GridWrapper = styled(Grid)`
    margin-bottom: 5%;
    @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
      margin-bottom: 0;
    }
  `;
  return (
    <>
      <PageHeading displayLogo logo={softLogo} title="풀릿의 연구 개발" />
      <Container>
        {memberList.map((x, i) => (
          <GridWrapper container key={`member-row${i}`}>
            {x.map(y => (
              <Grid key={y.id} item xs={12} sm={3}>
                <DefaultProfileCard
                  title={y.name}
                  img={y.profileImg}
                  subject={y.position}
                  description={y.description}
                  onClick={() => dispatch(push(`/member/${y.id}`))}
                  isPerson
                />
              </Grid>
            ))}
          </GridWrapper>
        ))}
      </Container>

      <Grid container>
        <Grid container style={{ marginTop: '10%' }} spacing={2}>
          <Grid item xs={12} sm={12}>
            <Banner
              topText="풀릿소프트의 첫 번째 프로젝트"
              middleText="시간과 장소에 제한받지 않는 강의환경을 구축합니다."
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MainSection;
