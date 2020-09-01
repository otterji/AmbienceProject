import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Heading, LogoImg } from './styled';
import GoBackBtn from '../GoBackBtn';

const PageHeadingWrapper = styled.div`
  padding-bottom: 2em;
`;

const PageHeading = ({ displayLogo, logo, title }) => {
  const routeState = useSelector(state => state.router);
  const { action } = routeState;
  const isPush = action === 'PUSH';
  return (
    <PageHeadingWrapper>
      {displayLogo || !isPush ? <LogoImg src={logo} /> : <GoBackBtn />}
      <Heading>{title}</Heading>
      <hr />
    </PageHeadingWrapper>
  );
};

PageHeading.propTypes = {
  displayLogo: PropTypes.bool,
  logo: PropTypes.any,
  title: PropTypes.string,
};

PageHeading.defaultProps = {
  displayLogo: false,
  logo: null,
  title: 'Title',
};

export default PageHeading;
