<script>
  export default {
    created() {
      fetch("https://www.boredapi.com/api/activity")
        .then((response) => response.json())
        .then((data) => {
          this.data = data;
          console.log(data);
        });
    },
    methods: {
      fetchAgain() {
        fetch("https://www.boredapi.com/api/activity")
          .then((response) => response.json())
          .then((data) => {
            this.data = data;
            console.log(data);
          });
      }
    },
    data() {
      return {
        data: null,
        type: "circle"
      };
    }
  };
</script>

<style lang="scss" scoped>
  p {
    font-style: italic;
  }
  #activity {
    color: red;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>

<template>
  <button type="button" class="btn btn-primary" @:click="fetchAgain">
    Jag vet inte, ge mig ett förslag
  </button>
  <div v-if="data != null">
    <div id="activity">{{ data.activity }}</div>
    <p>Jag har inga pengar, vad kostar det?</p>
    <p>På en skala på 0-1, har aktiviteten följande pris:</p>
    {{ data.price }}
    <p>Okej, berätta mer, vad är det för typ av aktivitet?</p>
    {{ data.type }}
    <p>Kan jag göra det med fler personer? Det vore roligt att få sällkap</p>

    <img v-if="data.participants == 1" alt="" src="/assets/one.png" />
    <img v-if="data.participants == 2" alt="" src="/assets/two.png" />
    <img v-if="data.participants == 3" alt="" src="/assets/three.png" />
    <img v-if="data.participants == 4" alt="" src="/assets/four.png" />
    <img v-if="data.participants == 5" alt="" src="/assets/five.png" />
    <img v-if="data.participants > 5" alt="" src="/assets/group.png" />
    <!--
    {{ data.participants }} Testar här om v-if fungerar, siffran ska vara den
    samma som antal figurer -->
    <p>Kan du ge mig en länk till aktiviteten så jag kan läsa mer?</p>

    <p v-if="data.link == ''">Tyvärr finns det ingen länk</p>

    <p>Hur tillgänglig är aktiviteten?</p>
    <p>På en skala på 0-1, är aktiviteten så här tillgänglig:</p>
    {{ data.accessibility }}
    <!-- <p>Vilken nyckel har aktiviteten?</p>
    {{ data.key }} -->

    <!-- <ol v-bind:type="type">
      <li v-for="x in data">{{ x }}</li>
    </ol>  Fixa v-for på ngt annat sätt med en egen array-->
  </div>
</template>
