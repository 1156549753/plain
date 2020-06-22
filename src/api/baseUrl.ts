let env:any = process.env.NODE_ENV
console.log(env)
const baseUrl = () => {
    switch (env) {
        case 'production':
            return 'https://jfms.api.dxanm.com'; //正式地址
        case 'devlopment':
            return 'http://jifan_test_management_system_api.jifan.net.cn'; //测试地址
        default:
            return window.location.origin;
    }
}


export default baseUrl