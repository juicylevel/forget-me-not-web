import React from 'react';
import styled from 'styled-components';
import { oneLine } from 'common-tags';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout, Menu, Space, Divider } from 'antd';
import logoSvg from 'images/forget-me-not.svg';
import 'antd/dist/antd.css';

const { Sider, Content } = Layout;

const HEADER_HEIGHT = '64px';
const LOGO_SIZE = oneLine`
    calc(${HEADER_HEIGHT} * 0.68)
`;

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
    background-color: #011e3a;
`;

const Logo = styled.div`
    width: ${LOGO_SIZE};
    height: ${LOGO_SIZE};
    background-image: url(${logoSvg});
    background-repeat: no-repeat;
    background-position: center center;
    margin-right: 0.5rem;
`;

const LogoLabel = styled.span`
    font-size: 1.6rem;
    line-height: 1.6rem;
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

const NavDivider = styled(Divider)`
    &&& {
        &:before, 
        &:after {
            border-top: 1px solid #676767;
        }
    }
    .ant-divider-inner-text {
        color: #676767;
    }
`;

export default () => (
    <Router>
        <FullHeightLayout>
            <Sider width="320">
                <LogoWrapper to="/">
                    <Logo />
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
                        <Menu.Item key="today">
                            Сегодня
                        </Menu.Item>
                        <Menu.Item key="planned">
                            Запланировано
                        </Menu.Item>
                        <Menu.Item key="expired">
                            Просрочено
                        </Menu.Item>
                        <Menu.Item key="all">
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