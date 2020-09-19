import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SideBar from 'views/SideBar';
import Todo from 'views/Todo';
import Layout from './Layout';
import Header from './Header';
import Content from './Content';
import 'fontsource-roboto';

const customTheme = createMuiTheme({
    overrides: {
        MuiListItemIcon: {
            root: {
                minWidth: '30px',
            }
        }
    }
});

export default () => (
    <NoSsr>
        <MuiThemeProvider theme={customTheme}>
            <ThemeProvider theme={customTheme}>
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
            </ThemeProvider>
        </MuiThemeProvider>
    </NoSsr>
);