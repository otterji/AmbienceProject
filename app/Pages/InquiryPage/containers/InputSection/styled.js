import styled from 'styled-components';
import { TextField, Grid } from '@material-ui/core';

export const InputWrapper = styled(Grid)`
  margin-top: ${props => props.theme.spacing[2]};
`;

export const PhoneInput = styled.input`
  border: 1px ${props => props.theme.grey[2]} solid;
  height: 38px;
  padding: 5px;
  padding-left: 10px;
  /* transition: all 0.2s ease-in; */
  box-sizing: border-box;
  &:focus {
    border: 2px black solid;
    outline: none !important;
    /* box-sizing: border-box; */
  }
`;

export const Input = styled.div`
  width: 100%;
  min-height: 88px;
  display: inline-flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.spacing[0]};
`;

Input.Label = styled.label`
  font-size: 14px;
  margin-bottom: ${props => props.theme.spacing[1]};
  color: ${props => props.theme.textColor[1]};
`;

Input.TextField = styled.input`
  border: 1px
    ${props => (!props.error ? props.theme.grey[2] : props.theme.error.main)}
    solid;
  height: 38px;
  padding: 5px;
  padding-left: 10px;
  /* transition: all 0.2s ease-in; */
  box-sizing: border-box;
  &:focus {
    border: 2px ${props => (!props.error ? 'black' : props.theme.error.main)}
      solid;
    outline: none !important;
    /* box-sizing: border-box; */
  }
`;
Input.ErrorText = styled.span`
  font-size: 12px;
  color: ${props => props.theme.error.main};
`;

Input.TextArea = styled.textarea`
  outline: 1px ${props => props.theme.grey[2]} solid;
  height: 100px;
  padding: 10px;
  &:focus {
    border: 2px black solid;
    outline: none !important;
  }
`;
