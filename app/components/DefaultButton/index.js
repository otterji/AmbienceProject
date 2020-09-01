import React from 'react';
import { BeatLoader } from 'react-spinners';
import { StyledButton } from './styled';
import { theme } from '../../constants';

const DefaultButton = ({
  invert,
  content,
  width,
  onClick,
  disabled,
  loading,
}) => (
  <StyledButton
    invert={invert}
    width={width}
    disabled={disabled}
    onClick={() => (disabled ? null : onClick())}
  >
    {loading ? (
      <BeatLoader size={10} loading color={theme.textColor[1]} />
    ) : (
      content
    )}
  </StyledButton>
);

export default DefaultButton;

DefaultButton.defaultProps = {
  width: 100,
  invert: false,
  content: '확인',
  disabled: false,
  loading: false,
};
