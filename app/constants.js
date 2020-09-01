export const API_URL = 'https://api.pulit.io';

export const localStorageData = {
  idToken: 'pulit.idToken',
};

export const theme = {
  // 메인 파란색, light 는 밝은 파란색(검은 배경일때)
  primary: {
    main: '#062CE9',
    light: '#6A82FB',
  },
  secondary: {
    main: '#',
  },
  error: {
    main: '#f81c07',
  },
  // 연한색 -> 진한색
  grey: [
    '#FEFEFE',
    '#F6F7F8',
    '#DEE0E3',
    '#88929C',
    '#737E8A',
    '#3E4549',
    '#111314',
  ],
  textColor: {
    blue: '#062CE9',
    // 가장 기본, 검은색 비슷한거
    primary: '#111314',
    // 본문글, 추가 정보
    grey: ['#737E8A', '#3E4549'],
    // 아예 하얀것과 덜 하얀것
    white: ['#FFFFFF', '#DEE0E3'],
  },
  spacing: ['5px', '10px', '20px', '30px'],
};

// 반응형 기준은 tablet
export const DEVICE_SIZE = {
  mobile: '425px',
  tablet: '767px',
  laptop: '1024px',
};

export const menuConfig = [
  {
    id: 0,
    name: '비전',
    value: [''],
  },
  {
    id: 1,
    name: '교육 분석',
    value: ['trend'],
  },
  {
    id: 2,
    name: '컨설팅',
    value: ['consultant'],
  },
  {
    id: 3,
    name: 'R&D',
    value: ['technology', 'member'],
  },
  {
    id: 4,
    name: '파트너',
    value: ['partner'],
  },
  {
    id: 5,
    name: '문의',
    value: ['contacts', 'apply'],
  },
];

export const imgUrl = fileName =>
  `https://sumisa-canvas-test.s3.ap-northeast-2.amazonaws.com/assets/img/${fileName}`;
