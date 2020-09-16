import  jwtDecoder from 'jwt-decode';
export const tokenExpired = function () {
    let accessToken = localStorage.getItem("refresh_token");
    let tokenObject = jwtDecoder(accessToken);
    let expiryTime = new Date(tokenObject.exp*1000);
    return new Date() > expiryTime;
};