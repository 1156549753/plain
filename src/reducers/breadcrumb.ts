const initState:any = {
    parent_menu:{
        child_menu:''
    },
    name:'',
    child:true,
}

const breadcrumb:any = (state:any = initState,action:any)=>{
    switch(action.type){
        case 'MENU_NAME':
            return Object.assign({},action.menu)
        default:
            return state
    }
}

export default breadcrumb;