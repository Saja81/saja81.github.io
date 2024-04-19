import { createRouter, createWebHashHistory } from "vue-router";

import TrainView from "./views/TrainView.vue";
import BoredView from "./views/BoredView.vue";
import HomeView from "./views/HomeView.vue";
import OtherView from "./views/OtherView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: TrainView,
      path: "/train",
    },
    {
      component: BoredView,
      path: "/bored",
    },

    {
      component: OtherView,
      path: "/other",
    },

    {
      component: HomeView,
      path: "/",
    },
  ],
});
