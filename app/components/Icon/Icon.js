import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = ({ icon, color, size, onClick, cursor = 'default' }) => {
  const SVGWrapper = styled.div`
    height: ${typeof size === 'string' ? size : `${size}px`};
    svg {
      width: ${typeof size === 'string' ? size : `${size}px`};
      height: auto;
    }
    path {
      fill: ${color};
    }
    cursor: ${cursor};
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const SVGIcon = icon;

  return (
    <SVGWrapper onClick={onClick}>
      <SVGIcon />
    </SVGWrapper>
  );
};

Icon.defaultProps = {
  size: '24px',
};

Icon.propTypes = {
  icon: PropTypes.any,
  color: PropTypes.string,
  size: PropTypes.string || PropTypes.number,
  onClick: PropTypes.func,
  cursor: PropTypes.string,
};

export default Icon;
