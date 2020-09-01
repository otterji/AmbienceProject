/*
 * Article Page reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { GET_ARTICLE } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  article: {
    title: '',
    thumb: '',
    category: '',
    content: '',
    author: '',
    createdAt: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const articleDetailReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ARTICLE.REQUEST:
        draft.loading = true;
        break;
      case GET_ARTICLE.SUCCESS:
        draft.loading = false;
        draft.article = action.article;
        break;
      case GET_ARTICLE.FAIL:
        draft.loading = false;
        break;
    }
  });

export default articleDetailReducer;
