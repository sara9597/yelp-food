import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 3ydp_VpGXydHs53zq15B7i8PVt85yfh7IZv7s-2nZfPd29-4uyckOrVXECZBnegppA_28gj7_iZ46Nbc7tzOSkhscWsi1uyEys0f2E8KfwR_nrEOpit_8cQ-x03UYXYx"
  }
});
