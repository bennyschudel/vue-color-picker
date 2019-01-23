<template>
  <div class="ui-color-slider"
    :class="classes"
  >
    <div class="ui-color-slider__label">{{label}}</div>
    <input
      class="ui-color-slider__value"
      type="number"
      :value="niceValue"
      @change="setValue($event.target.value)"
    >
    <canvas
      class="ui-color-slider__canvas"
      ref="canvas"
      :width="canvasWidth"
      :height="canvasHeight"
      :style="canvasStyle"
    ></canvas>
  </div>
</template>

<script>
import * as d3 from 'd3';

import * as colorSpaces from '../core/colorSpaces';

import { clamp } from '../core/utils';

export default {
  name: 'ui-color-slider',
  props: {
    color: {
      type: Array,
    },
    alpha: {
      type: Number,
      default: 1,
    },
    width: {
      type: Number,
      default: 360,
    },
    height: {
      type: Number,
      default: 40,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    handleWidth: {
      type: Number,
      default: 20,
    },
    mode: {
      type: String,
      default: 'rgb',
    },
    // channel is the index: 0-x or 'a' for alpha channel
    // TODO: refactor
    channel: {
      type: [Number, String],
      default: 0,
    },
    start: {
      type: Number,
      default: 0,
    },
    end: {
      type: Number,
      default: 100,
    },
    decimals: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: '',
    },
    segments: {
      type: Number,
      default: undefined,
    },
  },
  data() {
    return {
      name: 'ui-color-slider',
      value: 0,
      handlePos: 0,
    };
  },
  computed: {
    classes() {
      return {
        [`${this.name}--vertical`]: this.vertical,
        [`${this.name}--segmented`]: this.segments,
      };
    },
    niceValue() {
      return d3.format(`.${this.decimals}f`)(this.value);
    },
    domain() {
      return [this.start, this.end];
    },
    canvasWidth() {
      return this.vertical ? 1 : this.width;
    },
    canvasHeight() {
      return this.vertical ? this.width : 1;
    },
    canvasStyle() {
      const w = this.width;
      const h = this.height;

      return this.vertical
        ? {
            width: `${h}px`,
            height: `${w}px`,
          }
        : {
            width: `${w}px`,
            height: `${h}px`,
          };
    },
    scale() {
      const segments = this.segments;

      if (!segments) {
        return v => v;
      }

      const intepolator = d3.interpolateNumber(this.start, this.end);
      const range = d3
        .range(segments)
        .map(d => d / segments)
        .map(intepolator);

      range.push(this.end);

      return d3
        .scaleQuantize()
        .domain([this.start, this.end])
        .range(range);
    },
  },
  methods: {
    setValue(v) {
      this.value = v;

      this.emitChange();
    },
    dragged() {
      let pos = d3.mouse(this.$refs.canvas)[this.vertical ? 1 : 0];
      pos = clamp(pos, 0, this.width);
      const value = this.$options.scale.invert(pos);
      this.setValue(value);
    },
    render() {
      if (!this.color) {
        return;
      }

      const context = this.$options.context;
      const scale = this.$options.scale;
      const width = this.width;
      const halfHandleWidth = this.handleWidth / 2;
      const _pos = this.handlePos;
      const mode = this.mode;
      const segments = this.segments;

      const image = context.createImageData(
        this.canvasWidth,
        this.canvasHeight,
      );

      let i = 0;
      let alpha;
      let rgb;

      const current = this.color.slice();

      for (let pos = 0; pos < width; ++pos) {
        if (
          !segments &&
          (pos === _pos - halfHandleWidth || pos === _pos + halfHandleWidth)
        ) {
          alpha = 1;
          rgb = [0, 0, 0];
        } else {
          const p =
            !segments &&
            (pos > _pos - halfHandleWidth && pos < _pos + halfHandleWidth)
              ? _pos
              : pos;

          if (this.channel === 'a') {
            alpha = this.scale(scale.invert(p));
            rgb = current;
          } else {
            alpha = this.alpha;
            current[this.channel] = this.scale(scale.invert(p));
            rgb = colorSpaces[mode].rgb(current);
          }
        }

        image.data[i++] = rgb[0];
        image.data[i++] = rgb[1];
        image.data[i++] = rgb[2];
        image.data[i++] = alpha * 255;
      }

      context.putImageData(image, 0, 0);
    },
    onWidthChange() {
      this.$options.scale.range([0, this.width]);
      this.render();
    },
    onValueChange(v) {
      const [min, max] = this.domain.sort();
      const value = (this.value = clamp(v, min, max));

      this.handlePos = Math.round(this.$options.scale(value));
      this.render();
    },
    onColorChange() {
      if (this.channel !== 'a') {
        this.value = this.color[this.channel];
      }

      this.render();
    },
    onAlphaChange(v) {
      if (this.channel === 'a') {
        this.value = v;
      }

      this.render();
    },
    emitChange() {
      const mode = this.mode;
      const channel = this.channel;
      const color = this.color.slice();
      const value = this.scale(this.value);
      let alpha = this.alpha;

      if (channel === 'a') {
        alpha = value;
      } else {
        color[channel] = value;
      }

      this.$emit('change', {
        value,
        color,
        mode,
        channel,
        alpha,
      });
    },
  },
  watch: {
    color: {
      handler: 'onColorChange',
      deep: true,
    },
    alpha: 'onAlphaChange',
    width: 'onWidthChange',
    value: 'onValueChange',
  },
  mounted() {
    const canvas = this.$refs.canvas;
    this.$options.context = canvas.getContext('2d');
    this.$options.scale = d3.scaleLinear().domain(this.domain);

    d3.select(canvas)
      .call(d3.drag().on('drag', this.dragged))
      .on('click', this.dragged);

    this.onWidthChange(this.width);
    this.onColorChange(this.color);
    this.onAlphaChange(this.alpha);
  },
};
</script>

<style lang="scss">
@import '../styles/core';

.ui-color-slider {
  display: flex;
  align-items: stretch;
  font-family: Monaco, monospace;
  height: 42px;
  width: auto;

  + .ui-color-slider {
    margin: -1px 0 0 0;
  }
}

.ui-color-slider__label {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  width: 24px;
  padding: 0 4px;
  vertical-align: middle;
  background-color: black;
  color: white;
  font-size: 12px;
}

.ui-color-slider__canvas {
  @include ui-alpha-background();

  box-sizing: content-box;
  border: 1px solid black;
  cursor: ew-resize;
  margin: 0 0 0 -1px;
}

.ui-color-slider__value {
  font-family: Monaco, monospace;
  border: 1px solid black;
  box-shadow: none;
  width: 48px;
  height: auto;
  margin: 0 0 0 -1px;
  padding: 0 4px;
  appearance: textfield;
  text-align: right;

  &:focus {
    background-color: black;
    color: white;
  }

  // remove stepper in chrome
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
  }
}

.ui-color-slider {
  &.ui-color-slider--vertical {
    flex-direction: column;
    width: 42px;
    height: auto;

    .ui-color-slider__label {
      height: 24px;
      width: auto;
    }

    .ui-color-slider__canvas {
      border: 1px solid black;
      cursor: ns-resize;
      margin: -1px 0 0 0;
    }

    .ui-color-slider__value {
      height: 24px;
      width: auto;
      margin: -1px 0 0 0;
    }

    + .ui-color-slider {
      margin: 0 0 0 -1px;
    }
  }

  &.ui-color-slider--segmented {
    .ui-color-slider__canvas {
      cursor: crosshair;
    }
  }
}
</style>
