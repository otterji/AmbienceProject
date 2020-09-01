import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Grid } from '@material-ui/core';
import { Placeholder } from 'rsuite';

import moment from 'moment';
import { DefaultPageWrapper } from '../../components/GlobalStyled/wrappers';
import PageHeading from '../../components/PageHeading';
import entLogo from '../../assets/img/logos/entLogo.png';
import { getMemberAction } from './actions';
import reducer, { initialState } from './reducer';

import saga from './saga';
import { ArticleInfo } from '../TrendPage/containers/MainResearch/styled';
import { theme } from '../../constants';
const { Paragraph, Graph } = Placeholder;

const key = 'member';

const MyImage = props => (
  <img
    style={{ width: '100%', height: 'auto' }}
    alt={props.alt}
    src={props.src}
  />
);

const MemberPage = ({ match }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();
  const { memberId } = match.params;
  const memberState = useSelector(state => state[key] || initialState);
  const { member, loading } = memberState;
  const { name, position, description, intro, profileImg } = member;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getMemberAction(memberId));
  }, []);

  const renderers = {
    image: MyImage,
  };

  return (
    <DefaultPageWrapper>
      <PageHeading title={loading ? '로딩중...' : name} logo={entLogo} />
      <Grid container>
        {/* <Grid item xs={12} md={12}>
          {loading ? (
            <Graph active />
          ) : (
            <img
              src={profileImg}
              style={{ width: '100%', height: 200, objectFit: 'cover' }}
              alt="thumb"
            />
          )}
        </Grid> */}
        <Grid item xs={12} style={{ marginTop: 20 }}>
          {loading ? (
            <Paragraph rows={2} />
          ) : (
            <ArticleInfo>
              <ArticleInfo.Segment>
                <ArticleInfo.Category>{position}</ArticleInfo.Category>
              </ArticleInfo.Segment>
              {/* <ArticleInfo.Title>{name}</ArticleInfo.Title> */}
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
            <ReactMarkdown source={description} renderers={renderers} />
          )}
        </Grid>
      </Grid>
    </DefaultPageWrapper>
  );
};

export default MemberPage;
