<template>
  <div class="part-list">
      <PartDumbComponent v-for="part of parts" :key="part.name" :part="part"></PartDumbComponent>
  </div>
</template>

<script>

import Actions from '../state/actions';
import PartDumbComponent from './PartDumbComponent.vue';

export default {
  name: 'piece',
  props: ['piece'],
   computed: {
    parts () {
      return this.$store.state.parts
    }
  },
  created() {
    this.$store.dispatch(Actions.subscribeToParts);
  },
  components: {
    PartDumbComponent
  }
}
</script>

<style lang="scss" scoped>

</style>
