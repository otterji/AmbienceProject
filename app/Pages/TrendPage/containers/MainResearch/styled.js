import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { DEVICE_SIZE } from '../../../../constants';

export const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 960px) {
    margin-bottom: 5%;
  }
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    margin-bottom: 15%;
  }
`;

ArticleInfo.Segment = styled.div`
  display: inline-flex;
  align-items: flex-end;
  flex-direction: row;
`;

ArticleInfo.Category = styled.p`
  color: ${props => props.theme.primary.main};
  font-weight: bold;
  margin-right: ${props => props.theme.spacing[2]};
  margin-top: 0;
  margin-bottom: 0;
`;

ArticleInfo.Date = styled.p`
  font-size: 12px;
  color: ${props => props.theme.textColor.grey[0]};
  margin-top: 0;
  margin-bottom: 0;
`;

ArticleInfo.Title = styled.h2`
  margin-top: ${props => props.theme.spacing[2]};
  margin-bottom: ${props => props.theme.spacing[1]};
  font-size: 1.5vw;
  @media only screen and (max-width: 1250px) {
    margin-top: 0;
    margin-bottom: 0;
  }
  @media only screen and (max-width: 960px) {
    font-size: 27px;
    line-height: 30px;
    margin-top: ${props => props.theme.spacing[2]};
    margin-bottom: ${props => props.theme.spacing[2]};
  }
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: 20px;
    line-height: 30px;
  }
`;
ArticleInfo.Content = styled.div`
  line-height: 1.5rem;
  color: ${props => props.theme.textColor.grey[1]};
  /* font-size: 0.75vw;
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: 20px;
    line-height: 30px;
  } */
`;

// ArticleInfo.StyledGird = styled(Grid)`
//   margin-bottom: 10%;
//   cursor: pointer;
//   @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
//     margin-bottom: 10%;
//   }
//   @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
//     margin-bottom: 15%;
//   }
// `;
