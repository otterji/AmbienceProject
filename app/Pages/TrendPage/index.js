import React, { useEffect } from 'react';
import { Placeholder } from 'rsuite';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { push } from 'connected-react-router';
import Fade from '@material-ui/core/Fade';
import { DefaultPageWrapper } from '../../components/GlobalStyled/wrappers';
import PageHeading from '../../components/PageHeading';
import entLogo from '../../assets/img/logos/entLogo.png';
import MainResearch from './containers/MainResearch';
import ArticleSection from './containers/ArticleSection';
import { getArticleListAction } from './actions';
import reducer, { initialState } from './reducer';

import saga from './saga';
import { initPageScroll } from '../../utils/hooks';

const key = 'trend';

const TrendPage = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();
  initPageScroll();

  const trendState = useSelector(state => state.trend || initialState);
  const { articleList, mainResearch, loading } = trendState;

  useEffect(() => {
    dispatch(getArticleListAction());
  }, []);

  const onClickArticle = id => {
    dispatch(push(`/trend/${id}`));
  };

  return (
    <Fade in timeout={1000}>
      <div>
        <DefaultPageWrapper>
          <PageHeading
            displayLogo
            title="풀릿의 교육 트렌드 분석"
            logo={entLogo}
          />
          <MainResearch
            loading={loading}
            mainResearch={mainResearch}
            onClick={onClickArticle}
          />
          <ArticleSection articleList={articleList} onClick={onClickArticle} />
        </DefaultPageWrapper>
      </div>
    </Fade>
  );
};

export default TrendPage;
