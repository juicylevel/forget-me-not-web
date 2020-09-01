import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './Layout';
import SideBar from './SideBar';
import Header from './Header';
import Content from './Content';
import Todo from 'views/Todo';
import 'fontsource-roboto';

export default () => (
    <Router>
        <CssBaseline />
        <Layout 
            sideBar={
                <SideBar />
            }
            header={
                <Header />
            }
            content={
                <Content>
                    <Todo />
                </Content>
            }
        />
    </Router>
);