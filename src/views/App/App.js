import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout, Space } from 'antd';
import logoSvg from 'images/forget-me-not.svg';
import 'antd/dist/antd.css';

const { Sider, Content } = Layout;

const HEADER_HEIGHT = '64px';

const FullHeightLayout = styled(Layout)`
    & {
        height: 100%;
    }
`;

const LogoWrapper = styled(Link)`
    display: block;
    height: ${HEADER_HEIGHT};
    background-color: #011e3a;
`;

const Logo = styled.div`
    width: ${HEADER_HEIGHT};
    height: ${HEADER_HEIGHT};
    background-image: url(${logoSvg});
    background-repeat: no-repeat;
    background-position: center 45%;
    background-size: 68%;
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

export default () => (
    <Router>
        <FullHeightLayout>
            <Sider width="320">
                <LogoWrapper to="/">
                    <Space>
                        <Logo />
                        <LogoLabel>
                            Forget-me-not
                        </LogoLabel>
                    </Space>
                </LogoWrapper>
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