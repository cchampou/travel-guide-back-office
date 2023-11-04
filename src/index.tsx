import React from 'react';
import { createRoot } from 'react-dom/client';
import { Layout } from 'antd';
import './styles/main.css';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import Sidebar from './components/navigation/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

const App = () => {
  return (
    <BrowserRouter>
      <Layout
        style={{
          minHeight: '100vh',
        }}
        hasSider
      >
        <Content style={{ padding: 32 }}>
          <Router />
        </Content>
        <Sider>
          <Sidebar />
        </Sider>
      </Layout>
    </BrowserRouter>
  );
};

const rootDOMElement = createRoot(document.getElementById('root')!);
rootDOMElement.render(<App />);
