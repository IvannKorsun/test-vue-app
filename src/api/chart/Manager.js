import axios from "axios";

export class Manager {
  constructor() {
    this.baseURL =
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
  }

  getCharts(limit) {
    return axios.get(this.baseURL + "?limit=" + limit, {
      headers: {
        "X-CMC_PRO_API_KEY": import.meta.env.VITE_CMC_PRO_API_KEY,
      },
    });
  }
}

export default new Manager();
