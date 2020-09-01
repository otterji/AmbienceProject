import React, { useEffect, useCallback } from 'react';
import useReactRouter from 'use-react-router';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { sendMail } from 'utils/request';
import useModal from '../../hooks/ModalHooks';
import close from '../../assets/img/icons/close.png';
import { menuConfig, DEVICE_SIZE } from '../../constants';

const DOM_ID = { modal: 'Modal', container: 'ModalContainer' };

const Container = styled.section`
  height: 100vh;
  position: fixed;
  width: ${props => (props.bShow ? '100%' : '0%')};
  z-index: 100;
  right: 0;
  transition: 0.05s ease-in;
`;

const MenuIndicator = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 2.5px;
  background-color: ${props =>
    props.selected ? props.theme.primary.main : 'transparent'};
  flex-direction: column;
`;

const TopMenuWrapper = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  border-bottom: 1px solid #dee0e3;
  font-size: 16px;
  justify-content: space-between;
`;

function Modal(props) {
  const { backgroundColor = '' } = props;
  const modalHooks = useModal();
  const dispatch = useDispatch();
  const actionClose = useCallback(
    event => {
      event.preventDefault();
      event.stopPropagation();
      const { target } = event;
      if (target.id === DOM_ID.modal) {
        modalHooks.closeModal();
      }
    },
    [modalHooks],
  );

  useEffect(() => {
    const target = document.getElementsByTagName('html')[0];
    const { children } = target;
    for (const element of children) {
      if (element.tagName.toLocaleUpperCase() === 'CANVAS') {
        element.remove();
      }
    }
  }, [modalHooks]);

  const { history, location, match } = useReactRouter();

  const handleMenuClick = value => {
    dispatch(push(`/${value}`));
    modalHooks.closeModal();
  };

  const handleClose = () => {
    modalHooks.closeModal();
  };

  const targetPath = location.pathname.split('/')[1];

  return (
    <Container
      id={DOM_ID.modal}
      bShow={modalHooks.bShow}
      backgroundColor={backgroundColor}
      onClick={actionClose}
    >
      <div
        style={{
          width: '60%',
          height: '100vh',
          marginLeft: '40%',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(50px)',
          borderLeft: '1px solid #dee0e3',
        }}
      >
        <TopMenuWrapper>
          <div
            style={{ padding: '17px', marginLeft: '10%' }}
            onClick={() => handleMenuClick('login')}
          >
            로그인
          </div>
          <img
            src={close}
            alt="close"
            onClick={handleClose}
            style={{
              paddingTop: '18px',
              paddingBottom: '18px',
              paddingRight: '24px',
            }}
          />
        </TopMenuWrapper>
        {/* <img
          src={close}
          alt="close"
          style={{ marginLeft: '80%', marginTop: '10%', right: 0 }}
          onClick={handleClose}
        /> */}
        <div style={{ paddingLeft: '20%', paddingTop: '60px' }}>
          {menuConfig.map(x => (
            <div
              style={{
                color: '#111314',
                fontSize: '16px',
                letterSpacing: '0.28px',
                marginBottom: '30px',
              }}
              onClick={() => handleMenuClick(x.value[0])}
              key={x.id}
            >
              <div style={{ display: 'flex' }}>
                {x.name}
                <div
                  style={{
                    marginLeft: '5%',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <MenuIndicator selected={x.value.includes(targetPath)} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: '100px',
            marginLeft: '20%',
            color: '#111314',
            display: 'flex',
            fontSize: '10px',
          }}
        >
          <div style={{ marginRight: '10%' }} onClick={() => sendMail()}>
            파트너쉽 문의
          </div>
          <div onClick={() => handleMenuClick('apply')}>컨설팅 문의</div>
        </div>
      </div>
    </Container>
  );
}

export default Modal;
