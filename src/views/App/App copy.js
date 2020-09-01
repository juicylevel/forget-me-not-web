import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout, Menu, Space } from 'antd';
import { CarryOutOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Todo from 'views/Todo';

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
    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.05);
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

const StyledSider = styled(Sider)`
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
`;

const StyledHeader = styled(Header)`
    background-color: rgba(255,255,255,0.97);
    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.05);
    position: fixed;
    backface-visibility: hidden;
    z-index: 999;
    width: 100%;
`;

const StyledContent = styled(Content)`
    padding: 22px 50px;
    background-color: white;
    margin-top: ${HEADER_HEIGHT};
`;

export default () => (
    <Router>
        <FullHeightLayout>
            <StyledSider 
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
            </StyledSider>
            <Layout>
                <StyledHeader>
                    
                </StyledHeader>
                <StyledContent>
                    <Todo />
                </StyledContent>
                <Footer>

                </Footer>
            </Layout>
        </FullHeightLayout>
    </Router>
);