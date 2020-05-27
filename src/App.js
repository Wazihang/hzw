import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { Button } from 'antd-mobile';

// 导入组件 （页面）
import Home from './pages/Home';
import CityList from './pages/CityList';
import Map from './pages/Map';
import NotFound from './pages/NotFound';


// 根组件
function App() {
  return (
    <div className="app">
      {/* 配置路由:一级路由 */}
      <Router>
        <Switch>
          {/* 路由重定向 */}
          <Redirect exact from='/' to='/home' />
          {/* 首页 */}
          <Route path="/home" component={Home} />
          {/* 城市列表 */}
          <Route path="/cityList" component={CityList} />
          {/* 地图找房 */}
          <Route path="/map" component={Map} />
          {/* 404页面 */}
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
