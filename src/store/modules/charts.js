import Manager from "../../api/chart/Manager";

export default {
  actions: {
    getCharts(context, limit) {
      Manager.getCharts(limit)
        .then((response) => {
          let labels = response.data.data.map((item) => item.name);
          let datasets = response.data.data.map((item) =>
            item.quote.USD.price.toFixed(2)
          );

          context.commit("getCharts", {
            labels: labels,
            datasets: [
              {
                label: "USD",
                backgroundColor: "#f87979",
                data: datasets,
              },
            ],
          });
        })
        .catch((e) => {
          console.error("Err", e);
        });
    },
  },
  mutations: {
    getCharts(state, data) {
      state.charts = data;
    },
  },
  state: {
    charts: {},
  },
  getters: {
    charts: (state) => state.charts,
  },
};
