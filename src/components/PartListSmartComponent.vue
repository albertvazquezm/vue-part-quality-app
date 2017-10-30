<template>
  <div class="part-list">
      <PartDumbComponent v-for="part of parts" :key="part.name" :part="part"></PartDumbComponent>
  </div>
</template>

<script>

import ActionConstants from '../state/actionConstants';
import PartDumbComponent from './PartDumbComponent.vue';

export default {
  name: 'part-list',
  computed: {
    parts () {
      return this.$store.state.parts
    }
  },
  created() {
    this.$store.dispatch(ActionConstants.subscribeToParts);
  },
  components: {
    PartDumbComponent
  }
}
</script>

<style lang="scss" scoped>

</style>
