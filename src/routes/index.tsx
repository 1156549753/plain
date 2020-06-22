
import React from 'react'
import { UserOutlined, VideoCameraOutlined, UploadOutlined, } from '@ant-design/icons';
import loadable from '@loadable/component'
const Login = loadable(()=>import('../views/Login/Login'))
const Login1 = loadable(()=>import('../views/Login/Login1'))
export interface IMenu {
    name: string
    id: number|string
    pid?:number|string
    path?: any
    component?:any
    icon?: JSX.Element
    exact?: boolean
}
export interface IMenuInTree extends IMenu {
    children?: IMenuInTree[]
}
export interface IMenuInTrees extends IMenuInTree {
    children?: IMenuInTrees[]
}

const routes:IMenuInTrees[] = [
    {
        id:0,
        path: '/',
        name: 'home',
        icon: <UserOutlined />,
        component: Login,
        exact: true
    },
    {
        id:1,
        name: 'first',
        icon: <VideoCameraOutlined />,
        exact: true,
        children: [
            {
                id:'1-0',
                path: '/general',              
                name: 'General',
                component: Login,
                exact: true,
            },
            {
                id:'1-1',
                path: '/layout',
                name: 'Layout',
                component: Login,
                exact: true,
            },
            {
                id:'1-2',
                name: 'Navigation',
                children:[
                    {
                        id:'1-2-0',
                        path: '/navigation/general',
                        name: 'General',
                        component: Login1,
                        exact: true,
                    },
                    {
                        id:'1-2-1',
                        path: '/navigation/layout',
                        name: 'Layout',
                        component: Login,
                        exact: true,
                    },
                    {
                        id:'1-2-2',
                        path: '/navigation/navigation',
                        name: 'Navigation',
                        component: Login,
                        exact: true,
                    },
                
            ]
            },
        ],
    },
    {
        id:2,
        path: '/second',
        name: 'second',
        icon: <UploadOutlined />,
        component: Login1,
        exact: true,
    },
]


export default routes