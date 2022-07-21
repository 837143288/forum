import React, { Component } from "react";
import styles from "./index.module.scss";
import { weatherRe, moodRe } from "../../utils/index";
import HttpTools from "../../utils/request";

export default class Write extends Component {
  state = {
    weather: "sun",
    mood: "stay",
    form: {
      title: "",
      main: "",
    },
  };

  getWeather = () => {
    const { weather } = this.state;
    switch (weather) {
      case "sun":
        this.setState({ weather: "cloud" });
        break;
      case "cloud":
        this.setState({ weather: "snow" });
        break;
      case "snow":
        this.setState({ weather: "ame" });
        break;
      case "ame":
        this.setState({ weather: "sun" });
        break;
      default:
        break;
    }
  };
  getMood = () => {
    const { mood } = this.state;
    switch (mood) {
      case "stay":
        this.setState({ mood: "smile" });
        break;
      case "smile":
        this.setState({ mood: "embarrassed" });
        break;
      case "embarrassed":
        this.setState({ mood: "angry" });
        break;
      case "angry":
        this.setState({ mood: "cry" });
        break;
      case "cry":
        this.setState({ mood: "stay" });
        break;
      default:
        break;
    }
  };

  submit = () => {
    const { form, weather, mood } = this.state;
    const api = HttpTools.apis.postList.submit;
    const data = {
      title: form.title.value,
      main: form.main.value,
      weather,
      mood,
    };
    HttpTools.postResponse(api, data).then((res) => {
      console.log(res);
    });
  };

  reset = () => {
    const { form } = this.state;
    this.setState({form:{title:'',main:''}})
    console.log(form);
  }

  onChange = (e,name) => {
    this.setState({form: {[name]: e.target.value}})
  }

  render() {
    const { weather, mood, form } = this.state;
    return (
      <div className={styles.write}>
        <div className={styles.container}>
          <div className={styles.components}>
            <div className={styles.form}>
              <input
                // ref={title => {form.title = title}}
                value={form.title}
                onChange={e => this.onChange(e,'title')}
                type="text"
                className={styles.form__input}
                placeholder="标题"
              />
              <div className={styles.form__common} onClick={this.getWeather}>
                <i className={`iconfont ${weatherRe(weather)}`}></i>
              </div>
              <div className={styles.form__common} onClick={this.getMood}>
                <i className={`iconfont ${moodRe(mood)}`}></i>
              </div>
            </div>
            <div className={styles.search}>
              <textarea
                type="text"
                className={styles.search__input}
                placeholder="日记"
                // ref={main => {form.main = main}}
                value={form.main}
                onChange={e => this.onChange(e,'main')}
              />
            </div>
            <div className={styles.icon}>
              <div className={styles.icon__common} onClick={this.submit}>
                <i className="iconfont icon-duigou_kuai"></i>
              </div>
              <div className={styles.icon__common} onClick={this.reset}>
                <i className="iconfont icon-cuo"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
