// import React, { useState, useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import Slide from './slide';
// import research from '../../assets/img/icons/research.png';
// import develop from '../../assets/img/icons/develop.png';
// import consulting from '../../assets/img/icons/consulting.png';

// const Container = styled.div`
//   width: 100%;
//   overflow: hidden;
// `;
// const Button = styled.button`
//   all: unset;
//   border: 1px solid coral;
//   padding: 0.5em 2em;
//   color: coral;
//   border-radius: 10px;
//   &:hover {
//     transition: all 0.3s ease-in-out;
//     background-color: coral;
//     color: #fff;
//   }
// `;
// const SliderContainer = styled.div`
//   width: 100%;
//   display: flex;
// `;

// const TOTAL_SLIDES = 2;
// export default function Slider() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideRef = useRef(null);
//   const nextSlide = () => {
//     if (currentSlide >= TOTAL_SLIDES) {
//       // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
//       setCurrentSlide(0);
//     } else {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };
//   const prevSlide = () => {
//     if (currentSlide === 0) {
//       setCurrentSlide(TOTAL_SLIDES);
//     } else {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };
//   useEffect(() => {
//     slideRef.current.style.transition = 'all 0.5s ease-in-out';
//     slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
//   }, [currentSlide]);
//   return (
//     <Container>
//       <SliderContainer ref={slideRef}>
//         <Slide img={research} />
//         <Slide img={develop} />
//         <Slide img={consulting} />
//       </SliderContainer>
//       <div style={{ textAlign: 'center' }}>
//         <Button onClick={prevSlide}>이전</Button>
//         <Button onClick={nextSlide}>다음</Button>
//       </div>
//     </Container>
//   );
// }
