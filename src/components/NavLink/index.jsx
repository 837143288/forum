import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import styles from './index.module.scss';

export default class MyNavLink extends Component {
  render() {
    return (
      /* props中含有children拿到标签中的内容 */
      <NavLink activeClassName={styles.atguigu} className={styles.listGroupItem} {...this.props}/>
    )
  }
}
