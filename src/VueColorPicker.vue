<template>
  <div class="vue-color-picker">
    <UiColorMixer
      :color="color"
      :vertical="vertical"
      :segments="segments"
      :spaces="spaces"
      @update:color="onColorUpdate"
    />
  </div>
</template>

<script>
import { UiColorMixer } from './components/index';

export default {
  name: 'vue-color-picker',
  props: {
    color: {
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
    onColorUpdate(v) {
      this.$emit('update:color', v);
    },
  },
};
</script>

<style lang="scss">
</style>
