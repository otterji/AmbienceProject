/*
 * TrendPage reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { GET_ARTICLE_LIST } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  mainResearch: {
    title: '',
    thumb: '',
    category: '',
    content: '',
    author: '',
    createdAt: '',
  },
  articleList: [],
};

/* eslint-disable default-case, no-param-reassign */
const articleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ARTICLE_LIST.REQUEST:
        draft.loading = true;
        break;
      case GET_ARTICLE_LIST.SUCCESS:
        draft.loading = false;
        draft.mainResearch = action.mainResearch;
        draft.articleList = action.result;
        break;
      case GET_ARTICLE_LIST.FAIL:
        draft.loading = false;
        break;
    }
  });

export default articleReducer;
