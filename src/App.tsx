import React, { Component} from 'react';
import 'antd/dist/antd.css'
import  './App.css';
import { Route, withRouter, HashRouter, Switch, Redirect, Link } from "react-router-dom";
import {UsersPage} from './components/Users/UsersPage';
import {Login} from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/Common/Preloader/Preloader';
import store, { AppStateType } from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { Header } from './components/Header/Header';


const { SubMenu } = Menu;
const {  Content, Footer, Sider } = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))



type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {initializeApp:() => void}

const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedChatPage = withSuspense(ChatPage)

class App extends Component<MapPropsType &  DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    console.error('some Error');
  }
  componentDidMount() {
    
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <Layout>
        <Header />
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >



            <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
              <Menu.Item key="1"><Link to="/profile" > Profile </Link></Menu.Item>
              <Menu.Item key="2"><Link to="/dialogs" > Message </Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Global">
              <Menu.Item key="5"><Link to="/developers"> Developers </Link></Menu.Item>
              <Menu.Item key="6"><Link to="/Chat"> Main Chat </Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}> 
              <Switch>
                <Route path="/profile/:userId?" render={() => <SuspendedProfile /> } />
                <Route path="/developers" render={() => <UsersPage pageTitle={'Samurai'} /> } />
                <Route path="/dialogs" render={() => <SuspendedDialogs /> } />
                <Route path="/login" render={() => <Login />} />
                <Route path="/Chat" render={() => <SuspendedChatPage />} />

                <Route exact path="/" render={() => <SuspendedProfile /> } />
                <Route exact path='/' render={({ location }) => <Redirect to={location.hash.replace('#', '')} />} />
                <Route path="*" render={() => <div>404 NOT FOUND</div>} />
              </Switch>
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Samurai Social Network ©2021 Created by RadySlav</Footer>
  </Layout>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

const AppContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const MainJSApp: React.FC = () => {
  return <HashRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default MainJSApp;