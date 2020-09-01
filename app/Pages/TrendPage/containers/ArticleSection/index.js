import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import { Grid } from '@material-ui/core';
import removeMd from 'remove-markdown';
import TextTruncate from 'react-text-truncate'; // recommend
import DefaultProfileCard from '../../../../components/DefaultProfileCard';

const ArticleSection = ({ articleList, onClick }) => (
  <Grid container style={{ marginTop: '5%' }}>
    {articleList.map((x, i) => (
      <Grid
        key={`articleContaienr-${i}`}
        container
        direction="row"
        style={{ marginBottom: '3%' }}
      >
        {x.map(y => {
          const plainText = removeMd(y.content, {
            stripListLeaders: true,
            listUnicodeChar: '',
            gfm: true,
            useImgAltText: true,
          });
          return (
            <Grid key={y.id} item sm={6} md={3}>
              <DefaultProfileCard
                isArticle
                onClick={() => onClick(y.id)}
                img={y.thumb}
                title={y.title}
                subject={y.category}
                grade={moment(y.createdAt).format('YYYY.MM.DD')}
                description={
                  <TextTruncate
                    line={5}
                    element="p"
                    truncateText="…"
                    text={plainText}
                  />
                }
              />
            </Grid>
          );
        })}
      </Grid>
    ))}
  </Grid>
);

export default ArticleSection;
