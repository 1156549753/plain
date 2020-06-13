const menu:any = {
    parent_menu:'',
    child_menu:''
}

const breadcrumb:any = (state:any = menu,action:any)=>{
    switch(action.type){
        case 'MENU_NAME':
            return Object.assign({},action.menu)
        default:
            return state
    }
}

export default breadcrumb;