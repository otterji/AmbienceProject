import React from 'react';
import PropTypes from 'prop-types';
import { goBack } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { BackArrowWrapper } from './styled';
import { theme } from '../../constants';

const GoBackBtn = () => {
  const dispatch = useDispatch();
  return (
    <BackArrowWrapper>
      <Button
        style={{ color: theme.textColor.grey[1] }}
        onClick={() => dispatch(goBack())}
        startIcon={<ArrowBackIcon />}
      >
        이전으로
      </Button>
    </BackArrowWrapper>
  );
};

GoBackBtn.propTypes = {};

GoBackBtn.defaultProps = {};

export default GoBackBtn;
