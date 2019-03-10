<template>
  <div id="demo">
    <UiWidgetManager>
      <UiWidget
        title="Settings"
      >
        <UiFieldGroup>
          <UiField label="Segments">
            <UiRange
              :min="0"
              :max="20"
              :step="1"
              :value.sync="segments"
            />
          </UiField>
        </UiFieldGroup>
      </UiWidget>
      <UiWidget
        title="VueColorPicker"
      >
        <VueColorPicker
          :color.sync="color"
          :segments.sync="segments"
          :spaces="spaces"
        />
      </UiWidget>
      <UiWidget
        title="VueColorPicker II"
      >
        <VueColorPicker
          :color.sync="colorB"
          :segments.sync="segments"
          :spaces="spaces"
          vertical
        />
      </UiWidget>
    </UiWidgetManager>
  </div>
</template>

<script>
import { Color } from '@hotpink/vue-mono-ui';

import VueColorPicker from '@/entry';

export default {
  name: 'demo',
  data: () => ({
    color: Color('hotpink'),
    colorB: Color('gold'),
    spaces: ['rgb', 'hsv', 'lchab'],
    segments: 0,
  }),
  components: {
    VueColorPicker,
  },
};
</script>

<style lang="scss">
:root {
  --mono-base-rgb: 0, 0, 0;
  --mono-text-rgb: 255, 255, 255;
  --mono-background-rgb: 255, 255, 255;
  --mono-font: Monaco, monospace;

  --ui-spinner__z-index: 9999;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

#demo {
  .ui-widget {
    box-shadow: 8px 8px 0 0 hsla(0, 0%, 0%, 0.3);
  }

  .ui-widget__content {
    background-color: #f8f8f8;
  }
}
</style>
