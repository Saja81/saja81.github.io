<script>
  export default {
    watch: {
      x(newX) {
        console.log(`${newX}`);
      }
    },

    data() {
      return {
        x: "Ändra till ditt namn"
      };
    }
  };
</script>

<template>
  <p>Här testar jag Watch:</p>
  <input v-model="x" />
  <p>Namnet har ändrats till: {{ x }}</p>
</template>
