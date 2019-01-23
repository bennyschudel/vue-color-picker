<template>
  <div
    :class="{
      'ui-color-sliders': true,
      'ui-color-sliders--vertical': vertical,
    }"
    v-if="ready"
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
import { BaseColor, BaseSpaces } from '../types';

import * as colorSpaces from '../core/colorSpaces';

import Color from '../core/Color';

import UiColorSlider from './UiColorSlider.vue';

export default {
  name: 'ui-color-sliders',
  props: {
    value: {
      type: Object,
      default: BaseColor,
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
      return this.value.a;
    },
    color() {
      return new Color(this.value);
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
    syncColors(color, master) {
      this.spaces.forEach(mode => {
        const value = colorSpaces[master][mode](color);

        this.$set(this.colors, mode, value);
      });
    },
    emitColorChange(value) {
      this.$emit('update:value', value);
    },
    onColorChange(d) {
      const [r, g, b] = colorSpaces[d.mode].rgb(d.color);
      const a = this.alpha;

      this.emitColorChange({ r, g, b, a });
    },
    onAlphaChange(d) {
      const [r, g, b] = this.colors.rgb;
      const a = d.value;

      this.emitColorChange({ r, g, b, a });
    },
    handleValueChange(v) {
      const { r, g, b } = v;

      this.syncColors([r, g, b], 'rgb');
    },
    handleSpacesChange() {
      this.handleValueChange(this.value);
    },
  },
  components: {
    UiColorSlider,
  },
  watch: {
    value: {
      handler: 'handleValueChange',
      deep: true,
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
  display: inline-flex;
  flex-direction: column;
  margin: -5px;

  > * {
    margin: 5px;
  }
}

.ui-color-sliders__spaces {
  display: inline-flex;
  flex-direction: column;
}

.ui-color-sliders__space {
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 0;

  &:first-child {
    margin: 0;
  }
}

.ui-color-sliders {
  &.ui-color-sliders--vertical {
    flex-direction: row;

    .ui-color-sliders__spaces {
      display: inline-flex;
      flex-direction: row;
    }

    .ui-color-sliders__space {
      display: inline-flex;
      flex-direction: row;
      margin: 0 0 0 5px;

      &:first-child {
        margin: 0;
      }
    }
  }
}
</style>
