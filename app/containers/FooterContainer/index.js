import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { sendMail } from 'utils/request';
import {
  FooterWrapper,
  TextAndAddressWrapper,
  Title,
  Address,
  BtnWrapper,
  CopyrightWrapper,
  CopyrightText,
  StyledBtn,
} from './styled';

const FooterContainer = () => {
  const dispatch = useDispatch();

  const handleMenuClick = value => {
    dispatch(push(`/${value}`));
  };

  return (
    <FooterWrapper>
      <TextAndAddressWrapper>
        <Title>풀릿</Title>
        <Address>서울특별시 강남구 테헤란로2길 27, 비전타워 1018</Address>
      </TextAndAddressWrapper>
      <BtnWrapper>
        <StyledBtn onClick={() => sendMail()}>파트너쉽 문의</StyledBtn>
        <StyledBtn onClick={() => handleMenuClick('apply')}>
          컨설팅 문의
        </StyledBtn>
      </BtnWrapper>
      <CopyrightWrapper>
        <CopyrightText>
          Copyright © 2020 Pulit Education & Trends. All rights reserved.
        </CopyrightText>
      </CopyrightWrapper>
    </FooterWrapper>
  );
};

export default FooterContainer;
