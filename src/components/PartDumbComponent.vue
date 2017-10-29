<template>
  <div class="part">
    <div class="row">
      <div class="col-md-12">
        <h2>{{part.name}}</h2>
        <div class="feature-list">
          <div v-for="feature of part.features" :key="feature.name" class="feature-list__item">
            <FeatureDumbComponent :feature="feature"></FeatureDumbComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import FeatureDumbComponent from './FeatureDumbComponent.vue';

export default {
  name: 'part',
  props: ['part'],
  components: {
    FeatureDumbComponent
  }
}
</script>

<style lang="scss" scoped>
  .feature-list {
    display: flex;
    flex-wrap: wrap;
    .feature-list__item {
      margin: 5px;
    }
  }
</style>
