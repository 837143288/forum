import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PostList from "../PostList";
import Write from "../Write";
import styles from "./index.module.scss";

export default class index extends Component {
  getMenu = (e) => {
    const {value} = e.target
    if (value === '1') {
      this.props.history.push('/home/postList')
    } else if (value === '2') {
      this.props.history.push('/home/write')
    }
  }
  render() {
    return (
      <div>
        <div className={styles.hander}>
          <div className={styles.container}>
            <div className={styles.segmentedControl}>
              <h2>Logo</h2>

              <input
                type="radio"
                name="radio2"
                value="1"
                defaultChecked
                id={styles.tab1}
                onChange={this.getMenu}
              />
              <label htmlFor={styles.tab1} className={styles.segmentedControl__1}>
                <span>记忆回廊</span>
              </label>
              <input type="radio" name="radio2" value="2" id={styles.tab2} onChange={this.getMenu} />
              <label htmlFor={styles.tab2} className={styles.segmentedControl__2}>
                <span>篆刻记忆</span>
              </label>
              <input type="radio" name="radio2" value="3" id={styles.tab3} onChange={this.getMenu} />
              <label htmlFor={styles.tab3} className={styles.segmentedControl__3}>
                <span>我的账号</span>
              </label>
              <div className={styles.segmentedControl__color}></div>
            </div>
          </div>
          {/* <h3>Logo</h3>
          <div className={styles.muen}>
            <NavLink to="/home/postList">我的多少</NavLink>
            <NavLink to="/home">写多少</NavLink>
          </div> */}
        </div>
        <div>
          {/* 路由显示内容 */}
          <Switch>
            <Route path="/home/postList" component={PostList} />
            <Route path="/home/write" component={Write} />
            {/* <Route path='/PubSub' component={PubSub} /> */}
            {/* Redirect重定向 */}
            <Redirect to="/home" />
          </Switch>
        </div>
      </div>
    );
  }
}
