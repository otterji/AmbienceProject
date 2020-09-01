import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import useReactRouter from 'use-react-router';
import hbg from '../../assets/img/icons/hbg.png';
import ModalHooks from '../../hooks/ModalHooks';
import { menuConfig } from '../../constants';
import logo from '../../assets/img/logos/pulitLogo.svg';

const DEVICE_SIZE = {
  mobile: '425px',
  tablet: '767px',
  laptop: '1024px',
};

const ToolbarContent = styled.div`
  display: flex;
  /* margin-top: 8px; */
  height: 100%;
  overflow: auto;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    /* justify-content: space-between; */
    padding-left: 0;
    padding-right: 0;
    /* margin-top: 14px; */
    align-items: center;
  }
`;

const ToolbarItem = styled.div`
  list-style: none;
  cursor: pointer;
  float: left;
  align-items: center;
  /* justify-content: center; */
  display: flex;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    width: 100%;
  }
`;

const RightImgWrapper = styled.div`
  margin-right: 7px;
  img {
    display: none;
    @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
      display: flex;
      height: 50px;
      padding-left: 65px;
      margin-top: 3px;
      top: 0;
    }
  }
`;

const LeftImgWrapper = styled.div`
  align-items: center;
  display: flex;
  img {
    width: auto;
    height: 35px;
    margin-top: 13.5px;
    align-items: center;
    display: flex;
    @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
      width: 25px;
      height: 25px;
      margin-top: 0px;
      margin-left: 20px;
    }
  }
`;

const RightMenuWrapper = styled.div`
  display: flex;
  margin-top: 33px;
  text-align: right;
  justify-content: flex-end;
  align-items: right;
  padding-right: 1.5%;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    display: none;
  }
`;

const LeftMenuWrapper = styled.div`
  padding-bottom: 10px;
  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    display: none;
  }
`;

const MenuItem = styled.li`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  cursor: pointer;
  margin-left: 50px;
  height: 40px;
  @media only screen and (max-width: 1024px) {
    margin-left: 20px;
  }
`;

const MenuIndicator = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  background-color: ${props =>
    props.selected ? props.theme.primary.main : 'transparent'};
  flex-direction: column;
  margin-bottom: 6px;
  transition: all 0.3s ease-in;
`;

const Toolbar = () => {
  const dispatch = useDispatch();
  const { history, location, match } = useReactRouter();
  const {
    bShow,
    container,
    openModal,
    closeModal,
    setContainer,
  } = ModalHooks();

  const handleMenuClick = value => {
    dispatch(push(`/${value}`));
  };

  const targetPath = location.pathname.split('/')[1];

  const menuClick = () => {
    if (!bShow) {
      openModal();
    } else {
      closeModal();
    }
  };

  const Login = () => {
    console.log('login');
  };

  return (
    <ToolbarContent>
      <LeftImgWrapper>
        <img
          src={logo}
          alt="mainLogo"
          onClick={() => handleMenuClick('')}
          style={{ marginTop: 0, cursor: 'pointer' }}
        />
        <LeftMenuWrapper>
          {menuConfig.map(x => (
            <MenuItem key={x.id} onClick={() => handleMenuClick(x.value[0])}>
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <MenuIndicator selected={x.value.includes(targetPath)} />
              </div>
              {x.name}
            </MenuItem>
          ))}
        </LeftMenuWrapper>
      </LeftImgWrapper>
      <RightImgWrapper onClick={menuClick}>
        <img src={hbg} alt="hbg" style={{ padding: '35%' }} />
      </RightImgWrapper>
      <RightMenuWrapper>
        <MenuItem onClick={() => handleMenuClick('login')}>로그인</MenuItem>
      </RightMenuWrapper>
    </ToolbarContent>
  );
};

Toolbar.propTypes = {};

export default Toolbar;
