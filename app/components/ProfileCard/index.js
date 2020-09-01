import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import {
  CardWrapper,
  ProfileSummary,
  Subject,
  Grade,
  CardTitle,
  CardDescription,
  CardContentsWrapper,
  Test,
} from './styled';
import { imgUrl } from '../../constants';

const ProfileCard = ({ img, subject, grade, title, description }) => {
  const CardImg = styled.div`
    margin-top: 10px;
    height: 50%;
    background: url('${img}');
    background-size: cover;
    opacity: 1;
    background-position: center;
  `;
  return (
    <CardWrapper>
      <CardContentsWrapper>
        <CardImg />
        <ProfileSummary>
          <Subject>{subject}</Subject>
          <Grade>{grade}</Grade>
        </ProfileSummary>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContentsWrapper>
    </CardWrapper>
  );
};
ProfileCard.propTypes = {
  img: PropTypes.any,
  subject: PropTypes.string,
  grade: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

ProfileCard.defaultProps = {
  img: imgUrl('profile_sunhyeong.png'),
  subject: '수학',
  grade: '유아 / 초등 / 중등',
  title: '신선형',
  description:
    '모든 국민은 그 보호하는 자녀에게 적어도 초등교육과 법률이 정하는 교육을 받게 할 의무를 진다. 행정권은 대통령을 수반으로 하는 정부 …',
};

export default ProfileCard;
