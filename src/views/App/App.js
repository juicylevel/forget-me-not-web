import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout, Menu, Space } from 'antd';
import { CarryOutOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import {
    CalendarOutlined,
    ClockCircleOutlined,
    ExclamationCircleOutlined,
    InboxOutlined,
  } from '@ant-design/icons';

const { Sider, Content } = Layout;

const HEADER_HEIGHT = '64px';

const FullHeightLayout = styled(Layout)`
    & {
        height: 100%;
    }
`;

const LogoWrapper = styled(Link)`
    display: flex;
    align-items: center;
    height: ${HEADER_HEIGHT};
    padding: 0 16px;
    background-color: #001e38;
`;

const LogoLabel = styled.span`
    font-size: 1.6rem;
`;

const Header = styled(Layout.Header)`
    display: flex;
    align-items: center;
    height: ${HEADER_HEIGHT};
    background-color: white;
`;

const Footer = styled(Layout.Footer)`
    background-color: white;
`;

const NavWrapper = styled(Space)`
    width: 100%;
`;

const NavDivider = styled.div`
    color: rgba(255, 255, 255, 0.35);
    padding: 0 16px;
    margin: 1rem 0;
`;

export default () => (
    <Router>
        <FullHeightLayout>
            <Sider 
                width="320" 
                theme="dark"
            >
                <LogoWrapper to="/">
                    <CarryOutOutlined 
                        style={{
                            fontSize: '2.3rem',
                            marginRight: '1rem',
                        }}
                    />
                    <LogoLabel>
                        Незабудка
                    </LogoLabel>
                </LogoWrapper>
                <NavWrapper 
                    direction="vertical" 
                    size={0}
                >
                    <Menu 
                        theme="dark" 
                        selectedKeys={['today']}
                    >
                        <Menu.Item key="today" icon={<CalendarOutlined />}>
                            Сегодня
                        </Menu.Item>
                        <Menu.Item key="planned" icon={<ClockCircleOutlined />}>
                            Запланировано
                        </Menu.Item>
                        <Menu.Item key="expired" icon={<ExclamationCircleOutlined />}>
                            Просрочено
                        </Menu.Item>
                        <Menu.Item key="all" icon={<InboxOutlined />}>
                            Все
                        </Menu.Item>
                    </Menu>
                    <NavDivider orientation="left" plain>
                        Мои списки
                    </NavDivider>
                    <Menu 
                        theme="dark" 
                        selectedKeys={['all-categories']}
                    >
                        <Menu.Item key="all-categories">
                            Все
                        </Menu.Item>
                        <Menu.Item key="work">
                            Работа
                        </Menu.Item>
                        <Menu.Item key="home">
                            По дому
                        </Menu.Item>
                        <Menu.Item key="mtb">
                            МТБ
                        </Menu.Item>
                    </Menu>
                </NavWrapper>
            </Sider>
            <Layout>
                <Header>
                    <span>Header</span>
                </Header>
                <Content>
                    
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </FullHeightLayout>
    </Router>
);