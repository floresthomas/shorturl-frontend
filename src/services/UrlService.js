import axios from "axios";

const SHORTURL_BASE_REST_API = "https://shorturl-backend-tan.vercel.app/url";

class ShortUrlService {
  postUrl(body) {
    return axios.post(`${SHORTURL_BASE_REST_API}`, body);
  }
}

export default new ShortUrlService();
