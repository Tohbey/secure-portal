export const BASE_URL = "http://localhost:8080/api/v1/";

//auth
export const AuthAPI = BASE_URL + "auth/";
export const LoginAPI = "login";
export const SecondAuthAPI = "second-auth";
export const ResendOTPAPI =  "resendOtp";
export const ChangePasswordAPI = "change-password";
export const ResetPasswordAPI = "reset-password";
export const RecoverAPI = "recover";
export const VerifyAPI = "verify";

//user
export const UserAPI = "user/";
export const CurrentUserAPI = UserAPI + "me";
export const TerminateUserAPI = UserAPI +"terminate";

//Question
export const QuestionAPI = BASE_URL +"question/";

//document
export const DocumentAPI = "document/";  //-> GET, POST, GET/PATCH/DELETE BY ID
export const DocumentsByUser =  DocumentAPI + "user";
export const ShareDocument = DocumentAPI +"share";