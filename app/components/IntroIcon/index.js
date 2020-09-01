import React from 'react';
import PropTypes from 'prop-types';
import {
  ImgWrapper,
  CardTitle,
  CardDescription,
  DescriptionWrapper,
  ResponsiveWrapper,
} from './styled';

const IntroIcon = ({ img, title, description, onClick }) => (
  <>
    <ResponsiveWrapper onClick={onClick}>
      <div
        style={{
          padding: '5% 10% 15% 10%',
          boxShadow: '0px 8px 16px #00000029',
          height: '530px',
        }}
      >
        <ImgWrapper src={img} alt="profileImage" />
        <DescriptionWrapper>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </DescriptionWrapper>
      </div>
    </ResponsiveWrapper>
  </>
);

IntroIcon.propTypes = {
  img: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.any,
  onClick: PropTypes.func,
};

IntroIcon.defaultProps = {
  img: null,
  title: '',
  description: '',
  onClick: null,
};

export default IntroIcon;
