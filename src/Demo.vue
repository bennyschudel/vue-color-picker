<template>
  <div id="app">
    <VueColorPicker
      :value.sync="value"
      :segments.sync="segments"
      :spaces="spaces"
    />
  </div>
</template>

<script>
import VueColorPicker from './entry';

export default {
  name: 'app',
  data: () => ({
    value: { r: 0, g: 0, b: 0, a: 1 },
    spaces: ['rgb', 'hsv', 'lchab'],
    segments: 16,
  }),
  components: {
    VueColorPicker,
  },
};
</script>

<style lang="scss">
</style>
