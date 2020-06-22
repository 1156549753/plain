import {SELECT_MENU} from  './actionTypes'
import routes from '../routes'
export const change_select_menu:any = (status:Array<any>)=>{
    let keys:Array<any> = status[0].split("-")
    let temp:any = []
    let l:number = keys.length - 1 
    let menus:any = routes
    // switch(l){
    //     case 1:
    //         temp = menus[Number(keys[0])]
    //         break;
    //     case 2:
    //         temp.push(menus[Number(keys[0])])
    //         temp.push(temp[0].children[Number(keys[1])])
    //         break;
    //     default:
    //         temp.push(menus[Number(keys[0])])
    //         temp.push(temp[0].children[Number(keys[1])])
    //         temp.push(temp[1].children[Number(keys[2])])
    // }
    temp.push(menus[Number(keys[0])])
    if(l>0){
        for(let i:number=0;i<l;i++){
            temp.push(temp[i].children[Number(keys[i+1])])
        }
    }
    
    return {
        type:SELECT_MENU,
        status:temp
    }
}