<template>
  <div class="status-icon">
    <i :class="['fa', getStatusIconClass(), getStatusColor()]" aria-hidden="true"></i>
  </div>
</template>

<script>

import StatusIconConstants from '../constants/statusIconConstants';

export default {
  name: 'status-icon',
  props: ['status', 'colored'],
  methods: {
    getStatusIconClass() {
      switch(this.status) {
        case StatusIconConstants.danger: return 'fa-times-circle-o';
        case StatusIconConstants.warning: return 'fa-exclamation';
        case StatusIconConstants.success: return 'fa-check-circle-o';
      }
    },
    getStatusColor() {
      if(this.colored) {
        switch(this.status) {
          case StatusIconConstants.danger: return 'status-icon--danger';
          case StatusIconConstants.warning: return 'status-icon--warning';
          case StatusIconConstants.success: return 'status-icon--success';
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .status-icon {
      .status-icon--danger {
        color: #F90719
      }
      .status-icon--warning {
        color: #FBB829
      }
      .status-icon--success {
        color: #7FAF1B
      }
  }
</style>
