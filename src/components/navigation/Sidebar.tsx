import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import MenuItem from 'antd/es/menu/MenuItem';

function Sidebar() {
  const navigate = useNavigate();
  function navigateTo(path: string) {
    return () => navigate(path);
  }

  return (
    <Menu theme="dark">
      <MenuItem onClick={navigateTo('/')}>Accueil</MenuItem>
      <MenuItem onClick={navigateTo('/countries')}>Pays</MenuItem>
      <MenuItem onClick={navigateTo('/cities')}>Villes</MenuItem>
      <MenuItem onClick={navigateTo('/addresses')}>Adresses</MenuItem>
      <MenuItem onClick={navigateTo('/activities')}>Activites</MenuItem>
    </Menu>
  );
}

export default Sidebar;
