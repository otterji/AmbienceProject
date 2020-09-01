import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import {
  FirstInquiryWrapper,
  AddressText,
  AddressWrapper,
  ServiceName,
  ConsultButton,
  PartnerButton,
} from './styled';
import PageHeading from '../../../../components/PageHeading';
import { theme } from '../../../../constants';
import { sendMail } from '../../../../utils/request';

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
      height: 30,
      borderRadius: 15,
      background: theme.primary.main,
      color: 'white',
    }}
  >
    {text}
  </div>
);

const config = {
  center: {
    lat: 37.497011,
    lng: 127.029668,
  },
  zoom: 16,
};

const MainSection = () => {
  const key = 'AIzaSyDMOAX2WSHXk-vkAMG4p7RXUy5ThadNVpU';
  const dispatch = useDispatch();
  return (
    <FirstInquiryWrapper>
      <PageHeading displayLogo title="풀릿과의 소통" />
      <Grid container>
        <Grid item xs={12} sm={4}>
          <AddressWrapper>
            <ServiceName>풀릿 이앤티</ServiceName>
            <AddressText>서울특별시 강남구 테헤란로2길 27</AddressText>
            <AddressText>비전타워 1018, 06241</AddressText>
          </AddressWrapper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <div
            style={{ width: '100%', height: 300, paddingTop: 20, zIndex: -1 }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{ key }}
              defaultCenter={config.center}
              defaultZoom={config.zoom}
            >
              <AnyReactComponent
                lat={config.center.lat}
                lng={config.center.lng}
                text="풀릿"
              />
            </GoogleMapReact>
          </div>
        </Grid>
        <Grid container style={{ marginTop: '10%' }} spacing={2}>
          <Grid item xs={12} sm={6}>
            <ConsultButton onClick={() => dispatch(push('/apply'))}>
              <h3 style={{ color: 'white' }}>교육 컨설팅 문의</h3>
            </ConsultButton>
          </Grid>
          <Grid item xs={12} sm={6}>
            <PartnerButton onClick={() => sendMail()}>
              <h3 style={{ color: 'white' }}>파트너쉽 문의</h3>
            </PartnerButton>
          </Grid>
        </Grid>
      </Grid>
    </FirstInquiryWrapper>
  );
};

export default MainSection;
