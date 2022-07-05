import { createRouter, createWebHistory } from "vue-router";
import Chart from "../views/ChartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/chart",
    },
    {
      path: "/chart",
      name: "chart",
      component: Chart,
    },
  ],
});

export default router;
