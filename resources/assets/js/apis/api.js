import axios from "axios";
 

export const Users = {
    login(crendential) {
      return new Promise((resolve, reject) => {
        console.log(crendential);
        axios.post("http://localhost:3001/auth/login", crendential).then((response) => {
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
    search(...params) {
      return new Promise((resolve, reject) => {      
        let uri = params.join('/')  
        const instance = axios.create({
          //baseURL: '"http://localhost:3001'
        });
        instance.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('access_token');
        instance.get("http://localhost:3001/"+uri).then(response=>{
          resolve(response.data)
        }).catch(err=>{
          reject(err)
        })
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