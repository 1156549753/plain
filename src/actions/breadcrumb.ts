import {MENU_NAME} from  './actionTypes'
export const update_menu_name:any = {
    type:MENU_NAME,
    menu:{
        parent_menu:{
            child_menu:''
        },
        name:'',
        child:true,
    }
}

