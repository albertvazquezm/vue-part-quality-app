<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Part list</h1>
          <PartListSmartComponent></PartListSmartComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import PartListSmartComponent from './components/PartListSmartComponent.vue';

export default {
  name: 'app',
  components: {
    PartListSmartComponent
  }
}
</script>

<style lang="scss">
</style>
