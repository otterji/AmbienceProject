import React from 'react';
import { Grid } from '@material-ui/core';
import ProgressiveImage from 'react-progressive-image';
import moment from 'moment';
import removeMd from 'remove-markdown';
import TextTruncate from 'react-text-truncate'; // recommend
import { Placeholder } from 'rsuite';
import { ArticleInfo } from './styled';
const { Paragraph, Graph } = Placeholder;

const MainResearch = ({ mainResearch, onClick, loading }) => {
  const plainText = removeMd(mainResearch.content, {
    stripListLeaders: true,
    listUnicodeChar: '',
    gfm: true,
    useImgAltText: true,
  });

  return (
    <Grid
      container
      spacing={4}
      alignItems="flex-start"
      style={{ cursor: 'pointer' }}
      onClick={() => onClick(mainResearch.id)}
    >
      <Grid item sm={12} md={5}>
        {loading ? (
          <Graph active />
        ) : (
          <ProgressiveImage
            src={mainResearch.thumb}
            placeholder="https://sumisa-canvas-test.s3.ap-northeast-2.amazonaws.com/02-ThumbnailandMain(sm).png"
          >
            {src => (
              <img
                style={{ width: '100%', height: 'auto' }}
                src={src}
                alt="an image"
              />
            )}
          </ProgressiveImage>
        )}
      </Grid>
      <Grid item sm={12} md={7}>
        {loading ? (
          <Paragraph rows={7} rowHeight={10} />
        ) : (
          <ArticleInfo>
            <ArticleInfo.Segment>
              <ArticleInfo.Category>
                {mainResearch.category}
              </ArticleInfo.Category>
              <ArticleInfo.Date>
                {moment(mainResearch.createdAt).format('YYYY.MM.DD')}
              </ArticleInfo.Date>
            </ArticleInfo.Segment>
            <ArticleInfo.Title>{mainResearch.title}</ArticleInfo.Title>
            <ArticleInfo.Content>
              <TextTruncate
                line={5}
                element="p"
                truncateText="…"
                text={plainText}
              />
            </ArticleInfo.Content>
          </ArticleInfo>
        )}
      </Grid>
    </Grid>
  );
};

export default MainResearch;
