import axios from "axios";

var baseURL = "http://103.28.37.34:806";
var noImage = "img/avatars/u2.png";
export const Users = {

  studentLogin(crendential) {
    return new Promise((resolve, reject) => {
      var url = new URL(baseURL + "/api/login"),
        params = {
          userName: crendential.UserName, //  "60.58.01.02",
          password: crendential.Password, //"mhl9QmgbrLq8W8pV5u/lpQ==",
          deviceid: "ggsgfdgdg"
        };
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
      fetch(url, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(response => {
        resolve(response.json());
      }).catch(error => {
        reject(error);
      });
    });
  },


  getUserInfor() {
    return this.callServer("Profile");

  },
  getLearningPoint() {
    return this.callServer("LearningPoints");

  },
  callServer(url) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("access_token");
      fetch(baseURL + "/api/" + url + "?accessToken=" + token, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }

        })
        .then(data => {
          console.log("Lấy dữ liệu thành công: ", data);
          resolve(data.json());
        })
        .catch(error => {
          console.log("Lấy dữ liệu thất bại: ", error);
          reject(error);
        });
    });
  },

  getMsgDetail(url, chatId) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("access_token");
      fetch(baseURL + "/api/" + url + "?accessToken=" + token + "&id=" + chatId, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }

        })
        .then(data => {
          console.log("Lấy dữ liệu SMS thành công: ", data);
          resolve(data.json());
        })
        .catch(error => {
          console.log("Lấy dữ liệu SMS thất bại: ", error);
          reject(error);
        });
    });
  },

  getCurrent() {

    // alert("Gọi được hàm từ Users");
    // return JSON.parse(localStorage.getItem("user"));

    var user = JSON.parse(localStorage.getItem("user"));
    var tmpImg = user.Image_Url;
    if (user.Image_Url != null) {
      user.Image_Url = baseURL + tmpImg;
    } else {
      user.Image_Url = noImage;
    }



    return user;
  },


};

export const Data = {

};

export default {
  Users,
  Data,
};