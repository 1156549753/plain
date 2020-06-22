import React from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
const { Header } = Layout



interface Iprops{
    collapsed:boolean,
    toggle:any
}

export default function HeaderBar(props:Iprops){
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
           {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick:props.toggle,
            })} 
        </Header>
    )
}