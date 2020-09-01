import React from 'react';
import PropTypes from 'prop-types';
import {
  ImgWrapper,
  ProfileSummary,
  Subject,
  Grade,
  CardTitle,
  CardDescription,
  DescriptionWrapper,
  ResponsiveWrapper,
} from './styled';
import { imgUrl } from '../../constants';

const DefaultProfileCard = ({
  img,
  subject,
  grade,
  title,
  description,
  onClick,
  isArticle,
  isPerson,
}) => (
  <>
    <ResponsiveWrapper onClick={onClick}>
      <ImgWrapper src={img} alt="profileImage" isPerson={isPerson} />
      <DescriptionWrapper>
        <ProfileSummary>
          <Subject>{subject}</Subject>
          <Grade>{grade}</Grade>
        </ProfileSummary>
        <CardTitle fontSize={isArticle ? 18 : 24}>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </DescriptionWrapper>
    </ResponsiveWrapper>
  </>
);

DefaultProfileCard.propTypes = {
  img: PropTypes.any,
  subject: PropTypes.string,
  grade: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.any,
  onClick: PropTypes.func,
  isArticle: PropTypes.bool,
  isPerson: PropTypes.bool,
};

DefaultProfileCard.defaultProps = {
  img: imgUrl('profile_sunhyeong.png'),
  subject: '',
  grade: '',
  title: '',
  description: '',
  onClick: null,
  isArticle: false,
  isPerson: false,
};

export default DefaultProfileCard;
