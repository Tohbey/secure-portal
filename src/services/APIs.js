export const APIs = "http://localhost:8080/api/v1/";

//auth
export const Auth = APIs +"auth/";
export const Login = Auth +"login";
export const SecondAuth = Auth +"second-auth";
export const resendOTP = Auth +"resendOtp";
export const changePassword = Auth +"change-password";
export const resetPassword = Auth +"reset-password";
export const verify = Auth +"verify";

//user
export const User = APIs +"user/";
export const currentUser = User + "me";
export const terminate = User +"terminate";

//Question
export const Question = APIs +"question/";