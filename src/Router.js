import React from 'react'
import {Route, Switch} from 'react-router-dom'
import LoginLayout from './component/LoginLayout'
import Layout from './component/Layout'

export default function Router() {
    const handleSignIn = values => {
        console.log(values);
      };

    return (
        <Switch>
            <Route exact path='/' component = {LoginLayout}/>
            <Route path='/' component = {Layout}/> 
            {/* 메인화면 이외의 경우에는 레이아웃을 통해 좌,상단 네비게이션 구현 */}
        </Switch>
    )
}
