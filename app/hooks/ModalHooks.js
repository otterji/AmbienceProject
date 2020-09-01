import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useCallback } from 'react';
import { showModal, hideModal, changeContainerModal } from '../modules/modal';

const useModal = () => {
  const dispatch = useDispatch();
  const { bShow, container } = useSelector(state => state.modal, shallowEqual);

  const openModal = useCallback(() => {
    document.body.style.overflow = 'hidden';
    dispatch(showModal());
  }, [dispatch]);
  const closeModal = useCallback(() => {
    document.body.style.overflow = 'unset';
    dispatch(hideModal());
  }, [dispatch]);
  const setContainer = useCallback(
    props => dispatch(changeContainerModal(props)),
    [dispatch],
  );

  return {
    bShow,
    container,
    openModal,
    closeModal,
    setContainer,
  };
};

export default useModal;
