import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const initPageScroll = () => {
  const routeState = useSelector(state => state.router);

  const pageScroll = () => {
    const { action } = routeState;
    if (action === 'PUSH') {
      window.scrollTo(0, 0);
    }
  };
  useEffect(() => {
    pageScroll();
  }, []);
};
