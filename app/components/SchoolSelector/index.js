import React, { Component, useState, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer, { initialState } from './reducer';
import saga from './saga';
import {
  getSchoolListAction,
  postSchoolAction,
  setSchoolIdAction,
} from './actions';
import { theme } from '../../constants';

const key = 'schoolSelector';

const SchoolSelector = ({ onChange }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();

  const schoolSelectorState = useSelector(
    state => state.schoolSelector || initialState,
  );

  const { schoolList, loading, insertId } = schoolSelectorState;

  const handleChange = (newValue, actionMeta) => {
    if (newValue.__isNew__) {
      dispatch(postSchoolAction(newValue.value));
    } else {
      dispatch(setSchoolIdAction(newValue.id));
    }
  };
  const handleInputChange = (inputValue, actionMeta) => {
    if (inputValue.length !== 0) {
      dispatch(getSchoolListAction(inputValue));
    }
  };

  const customStyles = {};

  return (
    <CreatableSelect
      isClearable
      styles={customStyles}
      onChange={handleChange}
      onInputChange={handleInputChange}
      options={schoolList}
      isLoading={loading}
      placeholder="학교를 검색하세요"
      loadingMessage={() => '검색중...'}
      noOptionsMessage={() => '해당하는 학교가 없습니다'}
      formatCreateLabel={input => `${input} 새로 입력`}
      getOptionValue={x => x.id}
      theme={muiTheme => ({
        ...muiTheme,
        borderRadius: 0,
        borderColor: theme.primary.main,
        colors: {
          ...muiTheme.colors,
          primary: 'black',
        },
      })}
    />
  );
};

export default SchoolSelector;
