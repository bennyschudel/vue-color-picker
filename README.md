# <VueColorPicker>

A color picker vue component.

## Usage

```javascript
import Vue from 'vue';

import MonoUi from '@hotpink/vue-mono-ui';
import VueColorPicker from '@hotpink/vue-color-picker';

Vue.use(MonoUi);

new Vue({
  name: 'app',
  data: () => ({
    value: { r: 0, g: 0, b: 0, a: 1 },
  }),
  template: `<VueColorPicker :value.sync="value" :spaces="['rgb', 'hsv', 'lchab']" />`
  components: {
    VueColorPicker,
  }
}).$mount('#app');
```

## Author
Benny Schudel / Switzerland

## License

[MIT](http://opensource.org/licenses/MIT)



