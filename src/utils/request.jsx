import axios from "axios";

class HttpTools {

  static errorMessage = '';
  static textHeader = "";
  // 本地环境
  static httpHeader = "/api"
  // API列表

  static apis = {
    login: {
      login: this.httpHeader + "/api/login",
    },
    postList: {
      postList: this.httpHeader + "/api/postList",
      submit: this.httpHeader + "/api/submit",
      search: this.httpHeader + "/api/search",
    }
  }

  static encodeQueryData = (data) => {
    const ret = [];
    for (const d in data) {
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }
    return ret.join('&');
  }

  static post(url, data) {
    // axios.defaults.headers.common['Authorization'] = localStorage.getItem("jwtToken")
    // axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT';
    const options = {
      method: "POST",
      url: url,
      data: data,
      // headers: {
      //   Authorization: localStorage.getItem("jwtToken"),
      // },
    }
    // console.log(data)
    axios(options).then(response => {
      // console.log(response);
    }).catch(error => {

    });
  }

  static get(url, data, callback, errorCallback) {
    // axios.defaults.headers.common['Authorization'] = localStorage.getItem("jwtToken")
    // axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT';
    const options = {
      method: "GET",
      url: url,
      params: data,
      // headers: {
      //   Authorization: localStorage.getItem("jwtToken"),
      // },
    };
    // console.log(data)
    axios(options).then(response => {
      // console.log(response.data);
      callback(response.data);
    }).catch(error => {
      errorCallback(error);
    });
  }

  static postResponse(url, data) {
    // axios.defaults.headers.common['Authorization'] = localStorage.getItem("jwtToken")
    // axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT';
    const options = {
      method: "POST",
      url: url,
      data: data,
      // headers: {
      //   Authorization: localStorage.getItem("jwtToken"),
      // },
    }
    // console.log(data)
    return axios(options);
  }

  static getResponse(url, data) {
    // console.log("search", data)
    // axios.defaults.headers.common['Authorization'] = localStorage.getItem("jwtToken")
    // axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT';
    const options = {
      method: "GET",
      url: url,
      params: data,
      // headers: {
      //   Authorization: localStorage.getItem("jwtToken"),
      // },
    };
    // console.log(data)
    return axios(options);
  }


  static json2UrlString(data = {}) {
    return Object.keys(data).map(function (key) {
      return `${key}=${data[key]}`;
    }).join("&")
  }
}

export default HttpTools;
