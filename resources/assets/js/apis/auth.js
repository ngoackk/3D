export const Session = {
    isValid(){
        return localStorage.get('access_token') != null;
    },
    logedIn(){
        return JSON.parse(localStorage.getItem('user') != null ? localStorage.getItem('user') : {}) 
    }
}
export default {
    Session    
};