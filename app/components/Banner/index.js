import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { BannerWrapper, Details, Heading, BannerTextWrapper } from './styled';
import { DEVICE_SIZE, imgUrl } from '../../constants';
const defaultClick = null;

const Banner = ({ onClick, topText, middleText, baseText, backgroundImg }) => {
  const BannerButton = styled.div`
    display: flex;
    cursor: ${props => (props.onClick ? 'pointer' : 'default')};
    background-image: url(${backgroundImg});
    background-size: cover;
    height: 300px;
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
    color: white;
    @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
      height: 150px;
    }

    &:hover {
      opacity: ${props => (props.onClick ? 0.8 : 1)};
    }
  `;

  return (
    <>
      <BannerButton onClick={onClick}>
        <BannerWrapper>
          <BannerTextWrapper>
            <Details>{topText}</Details>
            <Heading>{middleText}</Heading>
            <Details>{baseText}</Details>
          </BannerTextWrapper>
        </BannerWrapper>
      </BannerButton>
    </>
  );
};

Banner.propTypes = {
  topText: PropTypes.string,
  middleText: PropTypes.string,
  baseText: PropTypes.string,
  backgroundImg: PropTypes.any,
  onClick: PropTypes.func,
};

Banner.defaultProps = {
  topText: '',
  middleText: '',
  baseText: '',
  backgroundImg: imgUrl('consultingBanner.png'),
  onClick: defaultClick,
};

export default Banner;
