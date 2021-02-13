import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Row, Col, Button } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth, getLogin, getProfilePhoto } from '../../redux/auth-selectors';
import { logout } from '../../redux/auth-reducer';
import s from './Header.module.css';




export const Header: React.FC = () => {
const { Header} = Layout;

const  small  = useSelector(getProfilePhoto)
const isAuth = useSelector(getIsAuth)
const login = useSelector(getLogin)
const dispatch = useDispatch()
const logoutCallback = () => {
    dispatch(logout())
}


    return (
        <Header className="header">
        <Row>
            <Col span={1}>
            <img className={s.headerLogo} src='https://pngimg.com/uploads/circle/circle_PNG50.png' />
            </Col>
            <Col span={19}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1"><Link to="/developers"> Developers </Link></Menu.Item>
                </Menu>
            </Col>
            {isAuth 
                ? <> <Col span={1}>
                        <Avatar alt={login || ''} style={{ backgroundColor: '#87d068' }} src={small} />
                        
                    </Col>
                    <Col span={3}>
                        <Button onClick={logoutCallback} >Log out</Button>
                    </Col> </>
                : <Col span={4}> <Button> <Link  to="/login" >Login</Link> </Button> </Col>
            }
        </Row>      
    </Header>
    )
}


