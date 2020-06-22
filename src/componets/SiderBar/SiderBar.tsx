import React from 'react'
import { Layout, Menu } from 'antd'
import routes,{IMenuInTrees} from '../../routes/index'
import { change_select_menu } from '../../actions/sider_status'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



 
const { Sider }:any = Layout


const { SubMenu }:any = Menu

interface Iprop{
    collapsed:boolean
}

    // let path:string = ''
    // const getPath:any = (menu:IMenuInTrees[],key:any)=>{
    //     for(let i:number = 0;i<menu.length;i++){
    //         let item:any = menu[i]
    //         if(String(item.id)===String(key)){
    //             path = item.path
    //             break;
    //         }
    //         if(item.children){
    //         getPath(item.children,key)
    //         }
    //     }
    //     return path
    // }

let key:Array<any> = [1]
const getKey:any = (menu:IMenuInTrees[],path:string)=>{  
    for(let i:number = 0;i<menu.length;i++){
        let item:any = menu[i]
        if(item.path===path){
            const id:any = String(item.id)
            const indexs:any = id.split('-')
            const length:number = indexs.length-1
            const temp:Array<any> = [String(item.id)]
            if(length>=1){
                for(let j:number = length;j>=1;j--){
                    let index:any = indexs.slice(0,j).join('-')
                    temp.push(index)
                }
            }
            key = temp
            break;
        }
        if(item.children){
            getKey(item.children,path)
        }
    }
    return key
}


class SiderBar extends React.Component<Iprop>{

    public constructor(props:any){
        super(props)
    }

    

    public getMenus:any = (routes:IMenuInTrees[])=>{
        return routes.map((item)=>{
                    if(item.children){
                        return ( 
                            <SubMenu key={String(item.id)} icon={item.icon} title={item.name}>
                                 {this.getMenus(item.children)}
                            </SubMenu>
                        )
                    }
                    return (
                        <Menu.Item key={String(item.id)} icon={item.icon}>
                            <Link to={item.path}>
                                {item.name}
                            </Link>
                        </Menu.Item>
                    )
                })
    }
   

    public menuItems:any = this.getMenus(routes)
    public key:any = getKey(routes,window.location.pathname) //根据路径获取默认的key

    componentDidMount(){
        let props:any = this.props
        props.sendAction(this.key)
    }

     goto = ({keyPath}:any)=>{
        this.key = getKey(routes,window.location.pathname)
        console.log(this.key)
        let props:any = this.props
        props.sendAction(keyPath)  
    }

    

    render(){
        return(
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}> 
                <div className="logo" />
                <Menu theme="dark" mode="inline" onClick={this.goto} multiple={false} defaultSelectedKeys={ key } defaultOpenKeys={ key }>
                    {this.menuItems}
                </Menu>
            </Sider>
        )
    }
}   

const mapDispatchToProps:any = (dispatch:any)=>{
    return {
        sendAction:(status:any)=>{
            let csm = change_select_menu(status)
            dispatch(
                csm
            )
        }
    }
}

const mapStateToProps:any = (state:any) => state

export default connect(mapStateToProps,mapDispatchToProps)(SiderBar)