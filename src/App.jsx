import React, { Component } from 'react'
import { Switch, NavLink, Route, Redirect } from 'react-router-dom'

import Index from './Components/Index'
import Home from './Components/Home'
import Jiaocheng from './Components/Jiaocheng'
import Taolun from './Components/Taolun'
import Xiazai from './Components/Xiazai'
import './css/App.css'

export default class App extends Component {

    dengluzhuce = () => {
        console.log('登录注册');
        alert('敬請期待')
    }
    render() {
        return (
            <div>
                <div className="row navHead">
                    <ul>
                        <li>
                            <NavLink className="list-group-item myActiveStyle" to="/index" >游戏logo</NavLink>
                        </li>
                        <li>
                            <NavLink className="list-group-item myActiveStyle" to="/home" >首页</NavLink>
                        </li>
                        <li>
                            <NavLink className="list-group-item myActiveStyle" to="/jiaocheng" >教程</NavLink>
                        </li>
                        <li>
                            <NavLink className="list-group-item myActiveStyle" to="/taolun" >讨论</NavLink>
                        </li>
                        <li>
                            <NavLink className="list-group-item myActiveStyle" to="/xiazai" >下载</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="col-xs-6">
                    <div className="panel">
                        <Switch>
                            <Route path="/index" component={Index} />
                            <Route path="/home" component={Home} />
                            <Route path="/jiaocheng" component={Jiaocheng} />
                            <Route path="/taolun" component={Taolun} />
                            <Route path="/xiazai" component={Xiazai} />
                            <Redirect to='/home' />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }

}