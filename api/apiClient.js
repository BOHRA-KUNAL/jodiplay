import axios from "axios";
import endPoint from "./endPoint";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      let pathName = window.location.pathname;
      let exclude = ["/login", "/signup", "/forgot", "/", "/verify-otp",];

      if (!exclude.includes(pathName)) {
        localStorage.clear();
        window.location.reload();
        window.location.href = "/signup";
      }
    } else {
      return Promise.reject(error);
    }
  }
);

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && shouldSendToken(config.url)) {
      // Check if token should be sent
      config.headers["token"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const baseUrl = "https://backend.jodiplay.com/";

function shouldSendToken(url) {
  const excludedEndpoints = [];

  // Check if the provided URL is in the excludedEndpoints list
  return !excludedEndpoints.some((endpoint) => url.includes(endpoint));
}

class ApiManager {
  async userLogin(params) {
    return axios({
      url: baseUrl + endPoint.Login,
      method: "post",
      data: params,
    });
  }

  async userSignUp(params) {
    return axios({
      url: baseUrl + endPoint.SignUp,
      method: "post",
      data: params,
    });
  }

  async CheckMobile(params) {
    return axios({
      url: baseUrl + endPoint.ApiCheckMobile,
      method: "post",
      data: params,
    });
  }

  async ForgotPassword(params) {
    return axios({
      url: baseUrl + endPoint.ForgotPassword,
      method: "post",
      data: params,
    });
  }

  async sendotp(params) {
    return axios({
      url: baseUrl + endPoint.sendotp,
      method: "post",
      data: params,
    });
  }

  async VerifyOTP(params) {
    return axios({
      url: baseUrl + endPoint.VerifyOTP,
      method: "post",
      data: params,
    });
  }

  async VerifyOTPForgot(params) {
    return axios({
      url: baseUrl + endPoint.ForgotOTP,
      method: "post",
      data: params,
    });
  }

  async dashbordInfo() {
    return axios({
      url: baseUrl + endPoint.dashboard,
      method: "get",
      // data: params,
    });
  }

  async fundHistory(payload) {
    return axios({
      url: baseUrl + endPoint.fundHistory,
      method: "post",
      data: payload,
    });
  }

  async WalletHistory(payload) {
    return axios({
      url: baseUrl + endPoint.WalletHistoryAPI,
      method: "post",
      data: payload,
    });
  }

  async passwordChange(payload) {
    return axios({
      url: baseUrl + endPoint.passwordChange,
      method: "post",
      data: payload,
    });
  }

  async updateBankDetails(payload) {
    return axios({
      url: baseUrl + endPoint.bankDetails,
      method: "post",
      data: payload,
    });
  }

  async wallet_amount(payload) {
    return axios({
      url: baseUrl + endPoint.wallet_amount,
      method: "post",
      data: payload,
    });
  }

  async filterBiddingRecords(payload) {
    return axios({
      url: baseUrl + endPoint.bid_history,
      method: "post",
      data: payload,
    });
  }

  async winHistory(payload) {
    return axios({
      url: baseUrl + endPoint.win_history,
      method: "post",
      data: payload,
    });
  }

  async InitiateRazorPay(payload) {
    return axios({
      url: baseUrl + endPoint.InitiateRazorPayApi,
      method: "post",
      data: payload,
    });
  }

  async userProfile(payload) {
    return axios({
      url: baseUrl + endPoint.userprofile,
      method: "post",
      data: payload,
    });
  }

  async walletStatement(payload) {
    return axios({
      url: baseUrl + endPoint.walletStatement,
      method: "post",
      data: payload,
    });
  }

  async notifications(payload) {
    return axios({
      url: baseUrl + endPoint.notifications,
      method: "post",
      data: payload,
    });
  }

  async gameRates(payload) {
    return axios({
      url: baseUrl + endPoint.gameRates,
      method: "post",
      // data: payload,
    });
  }

  async SubmitBid(payload) {
    return axios({
      url: baseUrl + endPoint.SubmitBid,
      method: "post",
      data: payload,
    });
  }

  async galiDesawarBid(payload) {
    return axios({
      url: baseUrl + endPoint.galiDesawarBid,
      method: "post",
      data: payload,
    });
  }

  async galiGames(payload) {
    return axios({
      url: baseUrl + endPoint.galiGames,
      method: "post",
      data: payload,
    });
  }

  async indexPageGames(payload) {
    return axios({
      url: baseUrl + endPoint.indexPageGames,
      method: "post",
      data: payload,
    });
  }

  async galidisswarBidHistory(payload) {
    return axios({
      url: baseUrl + endPoint.galidisswarBidHistory,
      method: "post",
      data: payload,
    });
  }

  async galidisswarWiningHistory(payload) {
    return axios({
      url: baseUrl + endPoint.galidisswarWiningHistory,
      method: "post",
      data: payload,
    });
  }

  async addUserUpiDetails(payload) {
    return axios({
      url: baseUrl + endPoint.userUpiDetails,
      method: "post",
      data: payload,
    });
  }

  async addUserBankDetails(payload) {
    return axios({
      url: baseUrl + endPoint.userBankDetails,
      method: "post",
      data: payload,
    });
  }

  async galidisswarGameRates() {
    return axios({
      url: baseUrl + endPoint.galidisswarGameRates,
      method: "get",
    });
  }

  async userPaymentDetails(data) {
    return axios({
      url: baseUrl + endPoint.userPaymentDetails,
      method: "post",
      data: data,
    });
  }

  async withdrawTransactionHistory(data) {
    return axios({
      url: baseUrl + endPoint.withdrawTransactionHistory,
      method: "post",
      data: data,
    });
  }

  async AddFundRequest(data) {
    return axios({
      url: baseUrl + endPoint.addFundRequest,
      method: "post",
      data: data,
    });
  }

  async userWithdrawFundRequest(data) {
    return axios({
      url: baseUrl + endPoint.userWithdrawFundRequest,
      method: "post",
      data: data,
    });
  }

  async howToPlay(data) {
    return axios({
      url: baseUrl + endPoint.howToPlay,
      method: "get",
      data: data,
    });
  }

  async homeSliderImages(data) {
    return axios({
      url: baseUrl + endPoint.homePageSlider,
      method: "post",
      data: data,
    });
  }


  async getSliderText(data) {
    return axios({
      url: baseUrl + endPoint.GetNewsLine,
      method: "post",
      data: data,
    });
  }

  async getAllBlogs(data) {
    return axios({
      url: baseUrl + endPoint.allblogs,
      method: "post",
      data: data,
    });
  }
  async getBlogDetails(data) {

    // console.log("dar--",data)
    return axios({
      url: baseUrl + endPoint.blogDetails,
      method: "post",
      data: data,
    });
  }

  async getContactDetails() {
    return axios({
      url: baseUrl + endPoint.contactDetails,
      method: "get",
    });
  }

  async getGamePageDetails(data) {

    console.log("dar--",data.title)
    return axios({
      url: baseUrl + endPoint.gamePageDetails+data.title,
      method: "post",
      data: data,
    });
  }
}



const ApiClient = new ApiManager();
export default ApiClient;
