export const BASE_URL = "http://localhost:8080/api/v1/";

//auth
export const AuthAPI = BASE_URL + "auth/";
export const LoginAPI = "login";
export const SecondAuthAPI = "second-auth";
export const resendOTPAPI =  "resendOtp";
export const changePasswordAPI = "change-password";
export const resetPasswordAPI = "reset-password";
export const recoverAPI = "recover";
export const verifyAPI = "verify";

//user
export const UserAPI = "user/";
export const currentUserAPI = UserAPI + "me";
export const terminateUserAPI = UserAPI +"terminate";

//Question
export const QuestionAPI = BASE_URL +"question/";