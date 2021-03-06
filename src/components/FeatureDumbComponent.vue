<template>
  <div class="feature">
    <div :class="['feature__header', getFeatureStatusClass()]">
      <i class="fa fa-circle-o feature__header-circle-icon"></i>
      <p class="feature__header-title">{{feature.name}}</p>
      <div class="feature__header-status-icon">
        <StatusIconDumbComponent :status="getFeatureIconStatus()"></StatusIconDumbComponent>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="feature__body">
      <table>
        <tr>
          <th>Control</th>
          <th class="text-center">Dev</th>
          <th class="text-center">Dev Out Tot</th>
          <th>&nbsp;</th>
        </tr>
        <tr v-for="control of feature.controls" :key="control.name">
          <td>{{control.name}}</td>
          <td class="text-center">{{control.dev}}</td>
          <td class="text-center">{{control.devOutTot}}</td>
          <td class="text-center"><StatusIconDumbComponent :colored="true" :status="getControlIconStatus(control)"></StatusIconDumbComponent></td>
        </tr>
      </table>
    </div>
    <div class="feature__footer">
      <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>

import StatusIconDumbComponent from './StatusIconDumbComponent.vue';
import StatusIconConstants from '../constants/statusIconConstants';

const MAX_VALUE_WARN = 2;
const STATUS_SUCCESS = 'status_success';
const STATUS_WARNING = 'status_warning';
const STATUS_DANGER = 'status_danger';

export default {
  name: 'feature',
  props: ['feature'],
  components: {
    StatusIconDumbComponent
  },
  methods: {
    getControlIconStatus(control) {
      return this._getIconFromStatus(this._getControlStatus(control));
    },
    getFeatureIconStatus() {
      return this._getIconFromStatus(this._getFeatureStatus());
    },
    getFeatureStatusClass() {
      const featureStatus = this._getFeatureStatus();
      switch(featureStatus) {
        case STATUS_SUCCESS: return 'feature__header--success';
        case STATUS_WARNING: return 'feature__header--warning';
        case STATUS_DANGER: return 'feature__header--danger';
      }
    },
    _getIconFromStatus(status) {
      switch(status) {
        case STATUS_SUCCESS: return StatusIconConstants.success;
        case STATUS_WARNING: return StatusIconConstants.warning;
        case STATUS_DANGER: return StatusIconConstants.danger;
      }
    },
    _getFeatureStatus() {
      return this.feature.controls
        .map(control => this._getControlStatus(control))
        .reduce((acc, val) => {
          if(val === STATUS_WARNING && acc !== STATUS_DANGER) {
            return STATUS_WARNING;
          } else if(val === STATUS_DANGER) {
            return STATUS_DANGER
          }
          return acc;
        }, STATUS_SUCCESS);
    },
    _getControlStatus(control) {
      // Logic for status is completely made up
      if(control.dev === 0) {
        return STATUS_SUCCESS;
      }
      if(control.dev <= MAX_VALUE_WARN) {
        return STATUS_WARNING;
      }
      return STATUS_DANGER;
    }
  }
}
</script>

<style lang="scss" scoped>
  $padding: 10px;
  .feature {
    .feature__header {
      padding: $padding;
      color: #fff;
      .feature__header-title {
        margin: 0;
        float: left;
      }
      .feature__header-status-icon {
        float: right;
      }
      .feature__header-circle-icon {
        float: left;
        font-size: 1.2em;
        margin-right: 20px;
      }
      &.feature__header--danger {
        background: #F90719
      }
      &.feature__header--warning {
        background: #FBB829
      }
      &.feature__header--success {
        background: #7FAF1B
      }
    }
    .feature__body {
      padding: $padding;
      background: #ddd;
    }
    .feature__footer {
      background: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: $padding;
    }
    th, td {
      padding: 5px;
    }
  }
</style>
