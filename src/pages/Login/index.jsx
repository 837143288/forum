import React, { Component } from "react";
import Cookies from "js-cookie";
import { notification } from "antd";
import styles from "./index.module.scss";
import HttpTools from "../../utils/request";

export default class Login extends Component {
  state = {
    form: {
      userName: "",
      password: "",
    },
    down: false,
  };

  mouseDown = () => {
    this.setState({ down: true });
  };
  mouseUp = () => {
    
    const {form} = this.state
    this.setState({ down: false });
    const api = HttpTools.apis.login.login;
    const params = {
      userName: form.userName.value,
      password: form.password.value,
    };
    HttpTools.getResponse(api, params).then((res) => {
      if (res.data.code === 200) {
        Cookies.remove('token');
        Cookies.set("token", res.data.token);
        this.props.history.push({ pathname: "/home/postList" });
      } else {
        notification["error"]({
          message: res.data.errorMsg,
        });
      }
    });
  };

  render() {
    const { form, down } = this.state;
    return (
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.components}>
            <div className={styles.logo}></div>
            <div className={styles.form}>
              <input
                type="text"
                className={styles.form__input}
                placeholder="Type anything..."
                ref={(item) => {
                  form.userName = item;
                }}
              />
              <input
                type="text"
                className={styles.form__input}
                placeholder="Type anything..."
                ref={(item) => {
                  form.password = item;
                }}
              />
            </div>
            <div className={styles.circle}>
              <span
                className={`${styles.circle__btn} ${
                  down ? styles.shadow : null
                }`}
                onMouseDown={this.mouseDown}
                onMouseUp={this.mouseUp}
              >
                <i className="iconfont icon-denglu"></i>
              </span>
              <span className={styles.circle__back1}></span>
              <span className={styles.circle__back2}></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
