<template>
  <div
    class="ui-color-mixer"
    :data-vertical="vertical"
  >
    <div class="ui-color-mixer__sample">
      <UiColorSwatch
        :color="color"
        @update:color="onColorUpdate"
      />
      <UiColorInput
        :color="color"
        :format="hexFormat"
        no-swatch
        @update:color="onColorUpdate"
      ></UiColorInput>
      <UiColorInput
        :color="color"
        format="rgb"
        no-swatch
        @update:color="onColorUpdate"
      ></UiColorInput>
      <UiColorInput
        :color="color"
        format="hsl"
        no-swatch
        @update:color="onColorUpdate"
      ></UiColorInput>
    </div>
    <UiColorSliders
      :color="color"
      :spaces="spaces"
      :segments="segments"
      :vertical="vertical"
      @update:color="onColorUpdate"
    ></UiColorSliders>
  </div>
</template>

<script>
import { Color, UiColorSwatch, UiColorInput } from '@hotpink/vue-mono-ui';

import { BaseSpaces } from '../types';

import UiColorSliders from './UiColorSliders.vue';

export default {
  name: 'ui-color-mixer',
  props: {
    color: {
      type: Object,
      default: Color,
    },
    spaces: {
      type: Array,
      default: BaseSpaces,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    segments: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    alpha() {
      return this.color.getAlpha();
    },
    hexFormat() {
      return this.alpha < 1 ? 'hex8' : 'hex';
    },
  },
  methods: {
    emitColorUpdate(d) {
      this.$emit('update:color', d);
    },
    onColorUpdate(d) {
      this.emitColorUpdate(d);
    },
  },
  components: {
    UiColorSwatch,
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
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 88px auto;
  margin-bottom: 10px;

  .ui-color-swatch {
    width: 88px;
    height: 88px;
    grid-row-start: 1;
    grid-row-end: 4;
  }
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
  display: grid;
  grid-gap: 8px;
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
