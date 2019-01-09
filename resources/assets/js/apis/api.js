import axios from "axios";
export const Users = {
    login(crendential) {
      return new Promise((resolve, reject) => {
        console.log(crendential);
        axios.post("http://crm-std.mn.com.vn/xRequest.ashx", crendential).then((response) => {
            console.log(response);
            resolve(response)
        }).catch((error) => {
            console.log(error);
            reject(error)
        });		
         
      });
    },
  };
  
  export const Data = {
    search(filter) {
      return new Promise((resolve, reject) => {
        console.log(filter);
        console.log(reject);
        resolve(filter);
      });
    },
  };
  
  export default {
    Users,
    Data,
  };