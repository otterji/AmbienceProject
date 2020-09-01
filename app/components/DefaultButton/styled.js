import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width}px;
  background-color: ${props =>
    !props.invert ? 'transparent' : props.theme.primary.main};
  color: ${props => (props.invert ? 'white' : props.theme.textColor[0])};
  height: 40px;
  font-size: 14px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  border: 1px
    ${props => (props.invert ? props.theme.primary.main : props.theme.grey[5])}
    solid;
  outline: none;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;
