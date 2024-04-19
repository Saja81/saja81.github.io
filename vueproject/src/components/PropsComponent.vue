<script>
  export default {
    data() {
      return {
        name: this.test
      };
    },

    props: {
      test: {
        type: String,
        default: "test"
      }
    }
  };
</script>

<style lang="scss" scoped>
  $some-color: green;
  $some-color2: blue;
  p {
    color: $some-color;
  }
  div {
    color: $some-color2;
  }
</style>

<!-- function (name) { console.log(name) } -->

<template>
  <p>Här har jag skapat en komponent med props</p>
  <div>Hej {{ test }}!</div>
</template>
