import React, { Component } from "react";
import styles from "./index.module.scss";

export default class Demo extends Component {

  render() {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.components}>
            <div className={styles.switch}>
              <div className={styles.switch__1}>
                <input id="switch-1" type="checkbox" />
                <label htmlFor="switch-1"></label>
              </div>

              <div className={styles.switch__2}>
                <input id="switch-2" type="checkbox"/>
                <label htmlFor="switch-2"></label>
              </div>
            </div>

            <div className={styles.checkbox}>
              <div className={styles.checkbox__1}>
                <input id="checkbox-1" type="checkbox" />
                <label htmlFor="checkbox-1">
                  <i className={styles.materialIcons}>done</i>
                </label>
              </div>
              <div className={styles.checkbox__2}>
                <input id="checkbox-2" type="checkbox"/>
                <label htmlFor="checkbox-2">
                  <i className={styles.materialIcons}>done</i>
                </label>
              </div>
            </div>

            <div className={styles.radio}>
              <div className={styles.radio__1}>
                <input id="radio-1" type="radio" name="radio" value="1" />
                <label htmlFor="radio-1"></label>
              </div>

              <div className={styles.radio__2}>
                <input
                  id="radio-2"
                  type="radio"
                  name="radio"
                  value="2"
                />
                <label htmlFor="radio-2"></label>
              </div>
            </div>

            <div className={`${styles.btn} ${styles.btn__primary}`}>
              <p>Button</p>
            </div>
            <div className={`${styles.btn} ${styles.btn__secondary}`}>
              <p>Button</p>
            </div>

            <div className={styles.clock}>
              <div className={`${styles.hand} ${styles.hours}`}></div>
              <div className={`${styles.hand} ${styles.minutes}`}></div>
              <div className={`${styles.hand} ${styles.seconds}`}></div>
              <div className={styles.point}></div>
              <div className={styles.marker}>
                <span className={styles.marker__1}></span>
                <span className={styles.marker__2}></span>
                <span className={styles.marker__3}></span>
                <span className={styles.marker__4}></span>
              </div>
            </div>

            <div className={styles.chip}>
              <div className={styles.chip__icon}>
                <ion-icon name="color-palette"></ion-icon>
              </div>
              <p>Neumorphic Design</p>
              <div className={styles.chip__close}>
                <ion-icon name="close"></ion-icon>
              </div>
            </div>

            <div className={styles.circle}>
              <span className={styles.circle__btn}>
                <ion-icon className={styles.pause} name="pause"></ion-icon>
                <ion-icon className={styles.play} name="play"></ion-icon>
              </span>
              <span className={styles.circle__back - 1}></span>
              <span className={styles.circle__back - 2}></span>
            </div>

            <div className={styles.form}>
              <input
                type="text"
                className={styles.form__input}
                placeholder="Type anything..."
              />
            </div>

            <div className={styles.search}>
              <input
                type="text"
                className={styles.search__input}
                placeholder="Search..."
              />
              <div className={styles.search__icon}>
                <ion-icon name="search"></ion-icon>
              </div>
            </div>

            <div className={styles.segmentedControl}>
              <input
                type="radio"
                name="radio2"
                value="3"
                id={styles.tab1}
              />
              <label
                htmlFor={styles.tab1}
                className={styles.segmentedControl__1}
              >
                <p>Tab 1</p>
              </label>

              <input type="radio" name="radio2" value="4" id={styles.tab2} />
              <label
                htmlFor={styles.tab2}
                className={styles.segmentedControl__2}
              >
                <p>Tab 2</p>
              </label>

              <input type="radio" name="radio2" value="5" id={styles.tab3} />
              <label
                htmlFor={styles.tab3}
                className={styles.segmentedControl__3}
              >
                <p>Tab 3</p>
              </label>

              <div className={styles.segmentedControl__color}></div>
            </div>

            <div className={styles.icon}>
              <div className={styles.icon__home}>
                <ion-icon name="home"></ion-icon>
              </div>
              <div className={styles.icon__account}>
                <ion-icon name="person"></ion-icon>
              </div>
              <div className={styles.icon__settings}>
                <ion-icon name="settings"></ion-icon>
              </div>
            </div>

            <div className={styles.slider}>
              <div className={styles.slider__box}>
                <span className={styles.slider__btn} id="find"></span>
                <span className={styles.slider__color}></span>
                <span className={styles.slider__tooltip}>50%</span>
              </div>
            </div>
          </div>
          <a
            href="https://dribbble.com/myacode"
            className={styles.dribbble}
            target="_blank"
          >
            <ion-icon name="logo-dribbble"></ion-icon>
          </a>
        </div>
      </div>
    );
  }
}
