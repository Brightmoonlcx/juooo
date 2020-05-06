import React, { Component } from 'react';
import { 
    Route,
    NavLink,
    Switch,
    Redirect
 } from 'react-router-dom';
import Theater from './theater/Theater';
import Ticket from './ticket/Ticket';
import My from './my/My';
// import Home from "./index/Home";
export default class Index extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink exact className={"App-link"} activeClassName={"App-active"} to={"/"}>首页</NavLink>
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/theater"}>剧院</NavLink>
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/ticket"}>票夹</NavLink>
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/my"}>我的</NavLink>
                </nav>

                <Switch>
                    <Route path={"/"} exact></Route>
                    <Route path={"/theater"} component={Theater}></Route>
                    <Route path={"/ticket"} component={Ticket}></Route>
                    <Route path={"/my"} component={My}></Route>
                    <Redirect to={"/error"} from="*"></Redirect>
                </Switch>
            </div>
        )
    }
}
