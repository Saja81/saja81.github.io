<script>
export default {
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <img alt="" src="/assets/bored_man_small.png" />
  <p>Vad heter du?</p>
  <input v-model="name" />
  <p>Hej {{ name }}! Vad vill du göra idag?</p>
</template>
