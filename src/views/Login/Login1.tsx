import React, { useState,useEffect } from 'react'
import '@/assets/css/login/login.less'


 let starsCount:number=800 //星星数量
 let distance:number = 800 //间距800
 const Stars:any = ()=>{
    var counts:Array<any> = []
    for(let i:number=0;i<starsCount;i++){
        counts.push(i)
    }

    useEffect(() => {
        let starArr:any = document.getElementsByClassName('star')
        let body = document.body
        document.title = '登录'
        body.style.overflow= 'hidden'
        for(let i:number=0;i<starArr.length;i++){
            let item:any = starArr[i]
            let speed = 0.2 +(Math.random()*1);
            let Distance = distance + (Math.random()*300);
            item.style.transformOrigin = `0 0 ${Distance}px`
            item.style.transform = `translate3d(0,0,-${Distance}px) rotateY(${Math.random()*360}deg) rotateX(${Math.random()*-50}deg) scale(${speed},${speed})`
        }
    });

    return(
       <div className="stars">
            {counts.map((item:any)=>{
                return <div className="star" key={item}></div>
            })}
       </div>
    )
 }
export default function Login(){
    const [username,setUsername] = useState('')
    const [password,setPasswrod] = useState('')

    function login(e:any){
        console.log(e)
        console.log(username)
        console.log(password)
    }

    return (
        <div className="login">
            <Stars />
            <div className="ct">
                <p className="title">行空</p>
                <input type="text" value={username} placeholder="请输入用户名"  onChange={(v)=>{setUsername(v.target.value)}} autoComplete="off"/>
                <input type="password" value={password} placeholder="请输入密码"  onChange={(v)=>{setPasswrod(v.target.value)}} autoComplete="off"/>
                <button className="lg" onClick={(e)=>{login(e)}}>快点我哦！</button>
            </div>
        </div>
    )
}
