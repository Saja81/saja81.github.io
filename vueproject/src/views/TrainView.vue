<script>
import FetchExercises from "../components/FetchExercises.vue";

export default {
  components: {
    FetchExercises,
  },
};
</script>

<template>
  <p>
    Vad roligt att du känner för att träna idag. Nedan ser du en lista på
    förslag på övningar. Vill du att jag väljer övning åt dig? Tryck på knappen
    nedan så får du en random övning.
  </p>

  <FetchExercises />
</template>
