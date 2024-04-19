<script>
  export default {
    computed: {
      fullname() {
        return this.name + " " + this.namename;
      }
    },

    data() {
      return {
        name: "Sandra",
        namename: "Jakobsson"
      };
    }
  };
</script>

<template>
  <p>Här testar jag computed: {{ fullname }}</p>
</template>
