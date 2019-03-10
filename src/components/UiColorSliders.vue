<template>
  <div
    v-if="ready"
    :class="{
      'ui-color-sliders': true,
      'ui-color-sliders--vertical': vertical,
    }"
  >
    <!--div class="ui-color-sliders__gradient">
      <ui-color-gradient
        :color="getColor('rgb')"
        :vertical="vertical"
        :alpha="alpha"
        :segments="segments"
        @change="onColorChange"
      ></ui-color-gradient>
    </div-->

    <select
      v-if="space"
    >
      <option
        v-for="space in spaces"
        :key="space"
        :value="space"
      >{{space}}</option>
    </select>

    <div class="ui-color-sliders__spaces"
      v-for="item in sliders"
      :key="item.mode"
    >
      <UiColorSlider
        v-for="(channel, index) in item.channels"
        v-bind="channel"
        :key="channel.key"
        :color="item.color"
        :mode="item.mode"
        :alpha="item.alpha"
        :channel="index"
        :vertical="vertical"
        @change="onColorChange"
      ></UiColorSlider>
    </div>

    <div class="ui-color-sliders__alpha">
      <UiColorSlider
        :color="colors.rgb"
        mode="rgb"
        channel="a"
        :vertical="vertical"
        label="A"
        :start="1"
        :end="0"
        :decimals="2"
        :alpha="alpha"
        @change="onAlphaChange"
      ></UiColorSlider>
    </div>
  </div>
</template>

<script>
import { Color } from '@hotpink/vue-mono-ui';

import { BaseSpaces } from '../types';

import * as colorSpaces from '../core/colorSpaces';

import UiColorSlider from './UiColorSlider.vue';

export default {
  name: 'ui-color-sliders',
  props: {
    color: {
      type: Color,
    },
    space: {
      type: String,
      default: null,
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
  data() {
    return {
      ready: false,
      master: null,

      colors: {
        rgb: [0, 0, 0],
      },
    };
  },
  computed: {
    alpha() {
      return this.color.getAlpha();
    },
    sliders() {
      // TODO: custom segments per channel
      const { colors, spaces, alpha, segments } = this;

      const data = spaces.slice(0).map(mode => {
        const space = colorSpaces[mode];
        const color = colors[mode].slice();
        const { min, max, channel } = space;
        const channels = channel.map((key, i) => {
          const start = min[i];
          const end = max[i];

          let label = key.charAt(0).toUpperCase();
          // NOTE: workaround for cmyk label
          if (mode === 'cmyk' && i === 3) {
            label = 'K';
          }

          const decimals = end < 10 ? 2 : 0;

          return {
            key,
            label,
            start,
            end,
            decimals,
            segments,
          };
        });

        return {
          color,
          mode,
          alpha,
          channels,
        };
      });

      return data;
    },
  },
  methods: {
    syncColors(color, master) {
      this.spaces.forEach(mode => {
        const value = colorSpaces[master][mode](color);

        this.$set(this.colors, mode, value);
      });
    },
    emitColorChange(d) {
      this.$emit('update:color', d);
    },
    onColorChange(d) {
      const [r, g, b] = colorSpaces[d.mode].rgb(d.color);
      const a = this.alpha;

      this.emitColorChange(new Color({ r, g, b, a }));
    },
    onAlphaChange(d) {
      const [r, g, b] = this.colors.rgb;
      const a = d.value;

      this.emitColorChange(new Color({ r, g, b, a }));
    },
    handleColorChange(d) {
      const { r, g, b } = d.toRgb();

      this.syncColors([r, g, b], 'rgb');
    },
    handleSpacesChange() {
      this.handleColorChange(this.color);
    },
  },
  components: {
    UiColorSlider,
  },
  watch: {
    color: {
      handler: 'handleColorChange',
    },
    spaces: {
      handler: 'handleSpacesChange',
      deep: true,
    },
  },
  mounted() {
    this.handleSpacesChange();

    this.ready = true;
  },
};
</script>

<style lang="scss">
@import '../styles/core';

.ui-color-sliders {
  display: grid;
  grid-gap: 8px;
}

.ui-color-sliders__spaces {
  display: grid;
}

.ui-color-sliders {
  &.ui-color-sliders--vertical {
    grid-auto-flow: column;

    .ui-color-sliders__spaces {
      grid-auto-flow: column;
    }
  }
}
</style>
