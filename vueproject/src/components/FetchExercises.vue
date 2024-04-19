<script>
  export default {
    created() {
      fetch('https://wger.de/api/v2/exerciseinfo/?language=2&limit=300')
        .then((response) => response.json())
        .then((data) => {
          this.exercise = data.results

          console.log(data.results)
        })
    },
    data() {
      return {
        exercise: null,
        randomNumber: Math.round(Math.random() * 298 + 1)
      }
    },

    methods: {
      onClick() {
        this.randomNumber = Math.round(Math.random() * 298 + 1)
      }
    }
  }
</script>

<template>
  <input @:click="onClick" type="button" :value="randomNumber" />
  <!-- <p>{{ exercise[randomNumber].name }}</p> -->

  <ol>
    <li :key="x.name" v-for="x in exercise">{{ x.name }}</li>
  </ol>
</template>
