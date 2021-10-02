import Credentials from "../constants/credentials.json"

export const isLogin = () => {
    if (localStorage.getItem('access')) {
        return true;
    }

    return false;
}


export const login = (data) => {
    console.log('data ', data);
    console.log('credentials ', Credentials);

    if (data.username === Credentials.username) {
        if (data.password === Credentials.password) {
            localStorage.setItem('access', Credentials.username);
            return "success"
        }
        else {
            return "failed"
        }
    }
    else {
        return "failed"
    }

}