
import routes from '../routes'
let item = routes[0]

const initState:object = {
    status:[item]
}

const SiderStatus:any = (state:any=initState,action:any)=>{
    switch(action.type){
        case 'SELECT_MENU':
            return {
                status:action.status
            }
        default:
            return state
    }
}

export default SiderStatus