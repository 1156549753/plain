
import React from 'react'
import { Breadcrumb } from 'antd'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import '../../assets/css/index/bc.less'

const BreadcrumbBar:any = (props:any)=>{
  // console.log(props.sider_status)
  let data:Array<any> = props.sider_status.status
  return(
    <Breadcrumb className="bc">
      {data.map((item:any)=>{
        return(
          <Breadcrumb.Item key={item.id} href={item.path}>
            {item.icon}
            <span>{item.name}</span>
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}
const mapStateToProps:any = (state:any) => state
export default connect(mapStateToProps)(withRouter(BreadcrumbBar))