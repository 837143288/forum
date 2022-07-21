import React, { Component } from 'react'
import Cookies from 'js-cookie';
import { Button, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js';
import styles from './index.module.scss'
import HttpTools from '../../utils/request';



export default class Login extends Component {

  state = {
    btn: null,
    userName: '',
    password: '',
  }

  mousemove = (e) => {
    const { btn } = this.state
    const boundingClientRect = btn.getBoundingClientRect()
    const x = e.clientX - boundingClientRect.left
    const y = e.clientY - boundingClientRect.top

    const xc = boundingClientRect.width / 2
    const yc = boundingClientRect.height / 2

    const dx = x - xc
    const dy = y - yc

    btn.style.setProperty('--rx', `${dy / -30}deg`)
    btn.style.setProperty('--ry', `${dx / 30}deg`)

  }

  mouseleave = (e) => {
    const { btn } = this.state

    btn.style.setProperty('--ty', '0')
    btn.style.setProperty('--rx', '0')
    btn.style.setProperty('--ry', '0')

  }

  // mousedown = (e) => {
  //   const { btn } = this.state
  //   btn.style.setProperty('--tz', '-25px')
  // }

  // document.body.onmouseup = function (e) {
  //   docStyle.setProperty('--tz', '-12px')
  // }
  getLogin = () => {
    const api = HttpTools.apis.login.login
    const params = {
      userName: this.state.userName,
      password: this.state.password,
    }

    HttpTools.getResponse(api, params).then(res => {
      if (res.data.code === 200) {
        console.log(res);
        Cookies.set('token', res.data.token)
        PubSub.publish('userName', this.state.userName) 
        this.props.history.push({ pathname: '/home/postList' })
      } else {
        
      }
    })
  }

  btn = e => {
    this.setState({btn: e})
  }

  userName = e => {
    this.setState({userName: e.target.value})
  }
  password = e => {
    this.setState({password: e.target.value})
  }
  Login = () => {
    return (
      <div className={styles.loginForm}>
        <div className={styles.logo}>logo</div>
        <Input placeholder="请输入账号" prefix={<UserOutlined />} onChange={this.userName} />
        <Input placeholder="请输入密码" prefix={<LockOutlined />} onChange={this.password} />
        <Button type="primary" onClick={this.getLogin}>登录</Button>
      </div>
    )
  }
  render() {
    return (
      <div className={styles.bg}>
        <div className={styles.login}>
          <div ref={this.btn} className={styles.aBtn} onMouseMove={this.mousemove} onMouseLeave={this.mouseleave}>{this.Login()}</div>
        </div>
      </div>
    )
  }
}
