<script>
import HelloYou from "./components/HelloYou.vue";
import FetchActivity from "./components/FetchActivity.vue";
import FetchExercises from "./components/FetchExercises.vue";

export default {
  components: {
    HelloYou,
    FetchActivity,
    FetchExercises,
  },
};
</script>

<template>
  <HelloYou />
  <!-- <HelloYou v-if="$route.path === '/'" /> -->

  <nav>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/train">Träna</RouterLink>
      </li>
      <li>
        <RouterLink to="/bored">Uttråkad</RouterLink>
      </li>
      <li>
        <RouterLink to="/other">Annat</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>

  <!-- <FetchActivity /> -->
  <!-- FetchExercises -->
</template>
