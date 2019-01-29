<template>
  <div class="vue-color-picker">
    <UiColorMixer
      :value="value"
      :vertical="vertical"
      :segments="segments"
      :spaces="spaces"
      @update:value="onUpdateValue"
    />
  </div>
</template>

<script>
import { UiColorMixer } from './components/index';

export default {
  name: 'vue-chroma-picker',
  props: {
    value: {
      type: Object,
    },
    spaces: {
      type: Array,
      default: () => ['rgb', 'hsl', 'hclab'],
    },
    segments: {
      type: Number,
      default: null,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    UiColorMixer,
  },
  methods: {
    onUpdateValue(v) {
      this.$emit('update:value', v);
    },
  },
};
</script>

<style lang="scss">
</style>
