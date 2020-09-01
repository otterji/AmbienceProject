import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Grid } from '@material-ui/core';
import moment from 'moment';
import Fade from '@material-ui/core/Fade';
import { Placeholder } from 'rsuite';
import { DefaultPageWrapper } from '../../components/GlobalStyled/wrappers';
import PageHeading from '../../components/PageHeading';
import entLogo from '../../assets/img/logos/entLogo.png';
import { getArticleAction } from './actions';
import reducer, { initialState } from './reducer';
import saga from './saga';
import { ArticleInfo } from '../TrendPage/containers/MainResearch/styled';
import { theme } from '../../constants';
const { Paragraph, Graph } = Placeholder;

const key = 'article';

const MyImage = props => (
  <img
    style={{ width: '100%', height: 'auto' }}
    alt={props.alt}
    src={props.src}
  />
);

const ArticlePage = ({ match }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();
  const { articleId } = match.params;
  const trendState = useSelector(state => state[key] || initialState);
  const { article, loading } = trendState;
  const { title, thumb, category, date, content } = article;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getArticleAction(articleId));
  }, []);

  const renderers = {
    image: MyImage,
  };

  return (
    <Fade in timeout={1000}>
      <div>
        <DefaultPageWrapper>
          <PageHeading title={title} logo={entLogo} />
          <Grid container>
            <Grid item xs={12} md={12}>
              {loading ? (
                <Graph active />
              ) : (
                <img
                  src={thumb}
                  style={{ width: '100%', height: 200, objectFit: 'cover' }}
                  alt="thumb"
                />
              )}
            </Grid>

            <Grid item xs={12} style={{ marginTop: 20 }}>
              {loading ? (
                <Paragraph rows={2} />
              ) : (
                <ArticleInfo>
                  <ArticleInfo.Segment>
                    <ArticleInfo.Category>{category}</ArticleInfo.Category>
                    <ArticleInfo.Date>
                      {moment(date).format('YYYY.MM.DD')}
                    </ArticleInfo.Date>
                  </ArticleInfo.Segment>
                  <ArticleInfo.Title>{title}</ArticleInfo.Title>
                </ArticleInfo>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              style={{ lineHeight: '1.5rem', color: theme.textColor.grey[1] }}
            >
              {loading ? (
                <Paragraph rows={5} />
              ) : (
                <ReactMarkdown source={content} renderers={renderers} />
              )}
            </Grid>
          </Grid>
        </DefaultPageWrapper>
      </div>
    </Fade>
  );
};

export default ArticlePage;
