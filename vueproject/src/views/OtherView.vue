<script>
  import OtherThings from "../components/OtherThings.vue";
  import PropsComponent from "../components/PropsComponent.vue";
  import ComputedComponent from "../components/ComputedComponent.vue";
  import WatchComponent from "../components/WatchComponent.vue";

  export default {
    components: {
      OtherThings,
      PropsComponent,
      ComputedComponent,
      WatchComponent
    }
  };
</script>

<template>
  <OtherThings />
  <PropsComponent test="Sandra, du är grym!" />
  <ComputedComponent />
  <WatchComponent />
</template>
