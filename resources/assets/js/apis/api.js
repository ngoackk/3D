import axios from "axios";
export const Users = {
  studentLogin(crendential) {
    return new Promise((resolve, reject) => {
      var url = new URL("http://103.28.37.34:806/api/login"),
        params = {
          userName: crendential.UserName, //  "60.58.01.02",
          password: crendential.Password, //"mhl9QmgbrLq8W8pV5u/lpQ==",
          deviceid: "ggsgfdgdg"
        }
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      fetch(url, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(response => {
        resolve(response.json())
      }).catch(error => {
        reject(error)
      })
    })
  },
  getUserInfor() {
    return this.callServer("Profile")
    // return new Promise((resolve, reject) => {
    //   let token = localStorage.getItem("access_token");
    //   fetch("http://103.28.37.34:806/api/Profile?accessToken=" + token, {
    //       method: "POST",
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       }

    //     })
    //     .then(data => {
    //       console.log("Lấy dữ liệu thành công: ", data);
    //       resolve(data.json())
    //     })
    //     .catch(error => {
    //       console.log("Lấy dữ liệu thất bại: ", error);
    //       reject(error)
    //     });
    // })
  },
  getLearningPoint() {
    return this.callServer("LearningPoints")

  },
  callServer(url) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("access_token");
      fetch("http://103.28.37.34:806/api/" + url + "?accessToken=" + token, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }

        })
        .then(data => {
          console.log("Lấy dữ liệu thành công: ", data);
          resolve(data.json())
        })
        .catch(error => {
          console.log("Lấy dữ liệu thất bại: ", error);
          reject(error)
        });
    })
  },
  login(crendential) {
    return new Promise((resolve, reject) => {
      console.log(crendential);
      axios.post("https://tinchi.hau.edu.vn/DangNhap/Login", crendential).then((response) => {
        console.log(response);
        resolve(response);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });

    });
  },

};

export const Data = {
  search(...params) {
    return new Promise((resolve, reject) => {
      let uri = params.join('/');
      const instance = axios.create({
        //baseURL: '"http://localhost:3001'
      });
      instance.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('access_token');
      instance.get("https://tinchi.hau.edu.vn/DangNhap/Login/" + uri).then(response => {
        resolve(response.data);
      }).catch(err => {
        resolve({
          Id: '1212212121',
          Username: 'Test',
          FullName: 'Nguyen Van A',
          Email: 'test@test'
        });
        //reject(err)
      });
      // console.log(filter);
      // console.log(reject);
      //resolve(filter);
    });
  },
};

export default {
  Users,
  Data,
};