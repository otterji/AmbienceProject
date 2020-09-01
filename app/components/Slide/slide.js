import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Slide({ img }) {
  return <IMG src={img} />;
}
const IMG = styled.img`
  width: 100%;
`;
Slide.propTypes = {
  img: PropTypes.any,
};

Slide.defaultProps = {
  img: '',
};

export default Slide;
