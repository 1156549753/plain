import React from 'react'
import { Layout } from 'antd'
import HeaderBar from '../../componets/HeaderBar/HeaderBar';
import SiderBar from '../../componets/SiderBar/SiderBar';
import BreadcrumbBar from '../../componets/Breadcrumb/Breadcrumb';
import '@/assets/css/index/index.less'
import { Switch, Route } from 'react-router-dom'
import routes,{ IMenuInTrees } from '../../routes/index'
const { Content }:any = Layout;

interface Iprop{
    toggle?: () => void  
}

class Index extends React.Component<Iprop>{ 
    public state = {
        collapsed:false
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }
    getMenus:any = (routes:IMenuInTrees[])=>{
        return routes.map((item)=>{
                    if(!item.path&&item.children){
                        return this.getMenus(item.children)
                    }
                    return (
                        <Route
                            key={item.id}
                            exact={item.exact}
                            path={item.path}
                            component={item.component}
                        />
                    )
                })
    }

    render(){
            return (
              <div className="index">
                  <Layout style={{background:"#fff"}}>
                    <SiderBar collapsed={this.state.collapsed}></SiderBar>
                    <Layout style={{background:"#fff"}} className="site-layout">
                    <HeaderBar toggle={this.toggle} collapsed={this.state.collapsed} />
                    <BreadcrumbBar></BreadcrumbBar>
                    <Content
                        className="site-layout-background"
                        style={{
                        margin: '0px 24px 16px',
                        minHeight: 280,
                        background: '#f0f2f5'
                        }}
                    >
                        <Switch>
                            {this.getMenus(routes)}
                        </Switch>
                    </Content>
                    </Layout>
                </Layout>
              </div>
            );
    }
}

export default Index