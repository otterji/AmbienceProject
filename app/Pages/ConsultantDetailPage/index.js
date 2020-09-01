import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Grid } from '@material-ui/core';
import { Placeholder } from 'rsuite';
import { push } from 'connected-react-router';
import moment from 'moment';
import Banner from '../../components/Banner';

import { DefaultPageWrapper } from '../../components/GlobalStyled/wrappers';
import PageHeading from '../../components/PageHeading';
import entLogo from '../../assets/img/logos/entLogo.png';
import { getConsultantAction } from './actions';
import reducer, { initialState } from './reducer';

import saga from './saga';
import { ArticleInfo } from '../TrendPage/containers/MainResearch/styled';
import { theme } from '../../constants';

import { StyledGrid } from './styled';

const { Paragraph, Graph } = Placeholder;

const key = 'consultantDetail';

const MyImage = props => (
  <img
    style={{ width: '100%', height: 'auto' }}
    alt={props.alt}
    src={props.src}
  />
);

const ConsultantDetailPage = ({ match }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();
  const { consultantId } = match.params;
  const consultantState = useSelector(state => state[key] || initialState);
  const { consultant, loading } = consultantState;
  const { name, type, grade, description, intro, profileImg } = consultant;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getConsultantAction(consultantId));
  }, []);

  const renderers = {
    image: MyImage,
  };

  const onClickHandler = () => {
    dispatch(push(`/apply`));
  };

  return (
    <DefaultPageWrapper>
      <PageHeading title={loading ? '로딩중...' : name} logo={entLogo} />
      <StyledGrid container>
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
                <ArticleInfo.Category>{type}</ArticleInfo.Category>
                <ArticleInfo.Date>{grade}</ArticleInfo.Date>
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
            <>
              <ReactMarkdown source={description} renderers={renderers} />
              <ReactMarkdown source={intro} renderers={renderers} />
            </>
          )}
        </Grid>
      </StyledGrid>
      <Banner
        onClick={onClickHandler}
        topText="풀릿 에듀케이션 & 트렌즈"
        middleText="교육을 분석해온 전문가들에게 컨설팅을 받아 볼 수 있습니다."
        baseText="교육 컨설팅 문의 >"
      />
    </DefaultPageWrapper>
  );
};

export default ConsultantDetailPage;
