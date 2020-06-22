import axios from './axios'

export const Signup:any = (params:any)=>{
    return axios.get('/admin_user/login?'+params).then((res:any)=>{
            return res
    })
}