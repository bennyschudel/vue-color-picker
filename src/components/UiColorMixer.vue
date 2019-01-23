<template>
  <div
    class="ui-color-mixer"
    :data-vertical="vertical"
  >
    <div class="ui-color-mixer__sample">
      <div
        class="ui-color-mixer__sample-swatch"
        :style="{
          'background-color': rgbString
        }"
      ></div>
      <div class="ui-color-mixer__sample-info">
        <div>
          <UiColorInput
            :value="hexString"
            format="rgb"
            @update:value="onColorInputChange"
          ></UiColorInput>
          <!--ui-discreet-button
            icon="clipboard"
            v-clipboard="hexString"
            @success="emitColorCopy(hexString)"
          ></ui-discreet-button-->
        </div>
        <div>
          <UiColorInput
            :value="rgbString"
            format="rgb"
            @update:value="onColorInputChange"
          ></UiColorInput>
          <!--ui-discreet-button
            icon="clipboard"
            v-clipboard="rgbString"
            @success="emitColorCopy(rgbString)"
          ></ui-discreet-button-->
        </div>
        <div>
          <UiColorInput
            :value="hslString"
            format="rgb"
            @update:value="onColorInputChange"
          ></UiColorInput>
          <!--ui-discreet-button
            icon="clipboard"
            v-clipboard="hslString"
            @success="emitColorCopy(hslString)"
          ></ui-discreet-button-->
        </div>
      </div>
    </div>
    <UiColorSliders
      :value="value"
      :spaces="spaces"
      :segments="segments"
      :vertical="vertical"
      @update:value="onUpdateValue"
    ></UiColorSliders>
  </div>
</template>

<script>
import { Color, UiColorInput } from '@hotpink/vue-mono-ui';

import { BaseColor, BaseSpaces } from '../types';

import UiColorSliders from './UiColorSliders.vue';

export default {
  name: 'ui-color-mixer',
  props: {
    value: {
      type: Object,
      default: BaseColor,
    },
    spaces: {
      type: Array,
      default: BaseSpaces,
    },
    vertical: {
      type: Boolean,
      default: true,
    },
    segments: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    alpha() {
      return this.value.a;
    },
    color() {
      return new Color(this.value);
    },
    hexString() {
      return this.color[
        this.alpha < 1 ? 'toHex8String' : 'toHexString'
      ]().toUpperCase();
    },
    rgbString() {
      return this.color.toRgbString();
    },
    hslString() {
      return this.color.toHslString();
    },
  },
  methods: {
    emitColorChange(v) {
      this.$emit('update:value', v);
    },
    onColorInputChange(v) {
      this.emitColorChange(v);
    },
    onUpdateValue(v) {
      this.emitColorChange(v);
    },
  },
  components: {
    UiColorInput,
    UiColorSliders,
  },
};
</script>

<style lang="scss">
@import '../styles/core';

.ui-color-mixer {
  display: inline-flex;
  flex-direction: column;

  > * {
    flex-shrink: 0;
  }
}

.ui-color-mixer__right-column {
  margin-left: 10px;
}

.ui-color-mixer__sample {
  display: flex;
  margin-bottom: 10px;
}
.ui-color-mixer__sample-swatch {
  position: relative;
  width: 100px;
  height: 100px;

  &::after {
    @include ui-fit();
    @include ui-alpha-background();

    content: '';
    z-index: -1;
  }
}
.ui-color-mixer__sample-info {
  flex-grow: 1;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  > div {
    display: flex;
    margin-top: 4px;
    align-items: flex-end;

    .ui-color-input {
      flex: 1 0;
    }
    .ui-discreet-button {
      flex: 0 0 24px;
      margin-left: 4px;
    }
  }
}

.ui-color-mixer__space {
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 0;

  &:first-child {
    margin: 0;
  }
}
.ui-color-mixer__sliders {
  display: inline-flex;
  flex-direction: column;
}

.ui-color-mixer__palettes {
  display: flex;
  margin-top: 8px;

  .ui-column {
    $columns: 6;
    width: 24px * $columns - $columns + 1;

    + .ui-column {
      margin-left: 10px;
    }
  }
}

.ui-color-mixer__palettes-admin {
  margin-top: 16px;
}

.ui-color-palette {
  + .ui-color-palette {
    margin-top: 5px;
  }
}

.ui-color-mixer {
  &[data-vertical] {
    .ui-color-mixer__space {
      display: inline-flex;
      flex-direction: row;
      margin: 0 0 0 5px;

      &:first-child {
        margin: 0;
      }
    }

    .ui-color-mixer__sliders {
      display: inline-flex;
      flex-direction: row;
    }
  }
}
</style>
