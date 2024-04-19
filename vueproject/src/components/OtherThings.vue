<script>
export default {
  data() {
    return {
      type: "circle",
    };
  },
};
</script>

<style lang="scss" scoped>
$some-color: purple;
p {
  color: $some-color;
}
</style>

<template>
  <p>Nedan ser du en lista där jag har använt v-bind för att sätta typ</p>
  <ul :type="type">
    <li>Träna</li>
    <li>Lukta på blommor</li>
  </ul>
</template>
