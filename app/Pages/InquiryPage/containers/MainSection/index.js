import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Grid } from '@material-ui/core';
import {
  FirstInquiryWrapper,
  InfoText,
  DescText,
  AddressWrapper,
} from './styled';
import PageHeading from '../../../../components/PageHeading';

const MainSection = () => (
  <FirstInquiryWrapper>
    <PageHeading title="풀릿의 교육 컨설팅 문의" />
    <Grid container>
      <Grid item xs={12} sm={12}>
        <AddressWrapper>
          <InfoText>
            하단의 정보를 기입하시면, 최대한 빠른 시일내에 답변을 보내드립니다.
          </InfoText>
          <DescText>
            문의의 양에 따라 회신이 지연될 수 있으니 양해 바랍니다.
          </DescText>
        </AddressWrapper>
      </Grid>
    </Grid>
  </FirstInquiryWrapper>
);

export default MainSection;
