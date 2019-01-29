<template>
  <div id="demo">
    <UiWidgetManager>
      <UiWidget
        title="Settings"
      >
        <div>
          <label>Segments</label>
          <input
            type="range"
            min="0"
            max="20"
            step="1"
            v-model.number="segments"
          />
          <UiInput :value.sync="segments" lazy />
        </div>
      </UiWidget>
      <UiWidget
        title="VueColorPicker"
      >
        <VueColorPicker
          :value.sync="value"
          :segments.sync="segments"
          :spaces="spaces"
        />
      </UiWidget>
      <UiWidget
        title="VueColorPicker II"
      >
        <VueColorPicker
          :value.sync="value"
          :segments.sync="segments"
          :spaces="spaces"
          vertical
        />
      </UiWidget>
    </UiWidgetManager>
  </div>
</template>

<script>
import VueColorPicker from '@/entry';

export default {
  name: 'demo',
  data: () => ({
    value: { r: 0, g: 0, b: 0, a: 1 },
    spaces: ['rgb', 'hsv', 'lchab'],
    segments: 0,
  }),
  components: {
    VueColorPicker,
  },
};
</script>

<style lang="scss">
#demo {
  .ui-widget__content {
    padding: 16px;
    border: 1px solid black;
    background-color: white;
  }
}
</style>
