import React, { Component } from "react";
import styles from "./index.module.scss";
import { weatherRe, moodRe } from "../../utils/index";
import HttpTools from "../../utils/request";
import { parseTime } from "../../utils/formDate";
import { message, DatePicker } from "antd";
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { gsap } from '../../utils/esm/all'

const { RangePicker } = DatePicker;

export default class PostList extends Component {
  state = {
    list: [],
    query: {}
  };

  componentDidMount = () => {
    this.getPostList();
  };

  getPostList = () => {
    const api = HttpTools.apis.postList.postList;
    HttpTools.getResponse(api).then((res) => {
      console.log(res.data.code);
      if (res.data.data) {
        this.setState({ list: res.data.data });
      } else if (res.data.code === 403) {
        message.warning(res.data.msg);
      }
    });
  };

  getDate = (date, dateString) => {
    console.log(dateString);
    this.setState({query: {startDate: dateString[0], endDate: dateString[1]}})
  }

  search = () => {

    // gsap.from("#components", {duration: 1.5, y: 100, opacity: 0});
    gsap.from("#components", {
      duration: 2, 
      // scale: 0.5, 
      opacity: 0, 
      y: 100,
      delay: 0.1, 
      stagger: 0.4,
      ease: "elastic", 
      force3D: true
    });
    
    document.querySelectorAll("#components").forEach(function(box) {
      box.addEventListener("click", function() {
        gsap.to("#components", {
          duration: 0.5, 
          opacity: 0, 
          y: -100, 
          stagger: 0.1,
          ease: "back.in"
        });
      });
    });
    // const api = HttpTools.apis.postList.search
    // HttpTools.postResponse(api, this.state.query).then(res => {
    //   console.log(res);
    //   if (res.data.code === 200) {
    //     this.setState({ list: res.data.data });
    //   }
    // })
  }

  render() {
    const { list } = this.state;
    return (
      <div className={styles.postList}>
        <div className={styles.container}>
          <div className={styles.components}>
            <div className={styles.search}>
              <RangePicker onChange={this.getDate} locale={locale} />
              <div className={styles.icon} style={{ margin: "0 3rem" }}>
                <div className={styles.icon__home} onClick={this.search}>
                  <i className="iconfont icon-sousuotianchong"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container} id="container">
          {list.map((item) => {
            return (
              <div
                id="components"
                className={styles.components}
                style={{ margin: "2rem 0" }}
                key={item.listId}
              >
                <div
                  className={styles.formdata}
                  style={{ marginBottom: "3rem" }}
                >
                  <div className={styles.formdata__title}>
                    <span>{parseTime(item.time)}</span>
                  </div>
                  <div className={styles.icon}>
                    <div
                      className={styles.icon__home}
                      style={{ marginLeft: "3rem" }}
                    >
                      <i className={`iconfont ${weatherRe(item.weather)}`}></i>
                    </div>
                    <div
                      className={styles.icon__account}
                      style={{ marginLeft: "3rem" }}
                    >
                      <i className={`iconfont ${moodRe(item.mood)}`}></i>
                    </div>
                  </div>
                </div>
                <div className={styles.formdata}>
                  <div className={styles.formdata__text}>
                    <span>{item.title}<br/><br/>{item.main}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
