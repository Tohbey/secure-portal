export const APIs = "http://localhost:8080/api/v1/";

//auth
export const AuthAPI = APIs +"auth/";
export const LoginAPI = AuthAPI +"login";
export const SecondAuthAPI = AuthAPI +"second-auth";
export const resendOTPAPI = AuthAPI +"resendOtp";
export const changePasswordAPI = AuthAPI +"change-password";
export const resetPasswordAPI = AuthAPI +"reset-password";
export const recoverAPI = AuthAPI +"recover";
export const verifyAPI = AuthAPI +"verify";

//user
export const UserAPI = APIs +"user/";
export const currentUserAPI = UserAPI + "me";
export const terminateUserAPI = UserAPI +"terminate";

//Question
export const Question = APIs +"question/";