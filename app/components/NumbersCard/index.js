import React from 'react';
import PropTypes from 'prop-types';
import {
  CardTitle,
  CardDescription,
  DescriptionWrapper,
  ResponsiveWrapper,
  Unit,
} from './styled';

const NumbersCard = ({ number, unit, description }) => (
  <>
    <ResponsiveWrapper>
      <DescriptionWrapper>
        <CardTitle>{number}</CardTitle>
        <Unit>{unit}</Unit>
        <CardDescription>{description}</CardDescription>
      </DescriptionWrapper>
    </ResponsiveWrapper>
  </>
);

NumbersCard.propTypes = {
  number: PropTypes.string,
  unit: PropTypes.string,
  description: PropTypes.any,
};

NumbersCard.defaultProps = {
  number: '0',
  unit: '',
  description: '',
};

export default NumbersCard;
