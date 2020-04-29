import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { MenuItems } from './components/';
import logo from './assets/tinyhouse-logo.png';
import { Viewer } from '../../lib/types';

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

const { Header } = Layout;

export const AppHeader = ({ viewer, setViewer }: Props) => {
  return (
    <Header className='app-header'>
      <div className='app-header__logo-search-section'>
        <div className='app-header__logo'>
          <Link to='/'>
            <img src={logo} alt='App logo' />
          </Link>
        </div>
      </div>
      <div className='app-header__menu-section'>
        <MenuItems viewer={viewer} setViewer={setViewer} />
      </div>
    </Header>
  );
};
