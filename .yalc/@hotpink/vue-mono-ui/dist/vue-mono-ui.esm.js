import { upperFirst } from 'lodash';
import { select, drag, event } from 'd3';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  name: 'ui-button',
  props: {
    value: {
      type: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    attrs: function attrs() {
      return Object.assign({}, this.$attrs);
    },
    listeners: function listeners() {
      var ref = this;
      var click = ref.emitClick;

      return Object.assign({}, this.$listeners,
        {click: click});
    },
  },
  methods: {
    emitClick: function emitClick() {
      this.$emit('click', this.value);
    },
  },
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-button"},[_c('button',_vm._g(_vm._b({staticClass:"ui-button__element",attrs:{"disabled":_vm.disabled}},'button',_vm.attrs,false),_vm.listeners),[_c('div',{staticClass:"ui-button__body"},[_c('div',{staticClass:"ui-button__icon"},[_vm._t("icon")],2),_vm._v(" "),_c('div',{staticClass:"ui-button__label"},[_vm._t("default")],2)])])])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-4ccc46a4_0", { source: ".ui-button{height:40px;overflow:hidden;display:inline-flex;border-radius:4px}.ui-button__element{border:none;appearance:none;background-color:transparent;padding:0;margin:0;border-radius:0;font-size:unset;outline:0;width:100%;height:100%;cursor:pointer}.ui-button__element:disabled{color:currentColor}.ui-button__body{display:flex;align-items:center}.ui-button__label{flex:1 1 auto;padding-left:16px;padding-right:16px;text-align:left}.ui-button__icon{flex:0 0 auto;padding-left:8px;padding-right:8px}.ui-button__icon+.ui-button__label{padding-left:0}.ui-button{background-color:#000}.ui-button .ui-button__label{color:#fff;font-size:1em}.ui-button .ui-icon{color:#fff}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "UiButton.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (css.map) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
          // http://stackoverflow.com/a/26603875
          code +=
            '\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
            ' */';
        }

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var UiButton = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

var tinycolor = require('tinycolor2');

//

var script$1 = {
  name: 'ui-color-input',
  props: {
    value: {
      type: String,
    },
    format: {
      type: String,
    },
    asString: {
      type: Boolean,
    },
  },
  methods: {
    reset: function reset() {
      this.$refs.input.value = this.value;
    },
    convert: function convert(value) {
      var ref = this;
      var format = ref.format;
      var asString = ref.asString;

      var color = new tinycolor(value);

      if (!color.isValid()) {
        return this.reset();
      }

      if (format) {
        var fn = "to" + (upperFirst(format)) + (asString ? 'String' : '');

        if (!(fn in color)) {
          return this.reset();
        }

        color = color[fn]();
      }

      this.$emit('update:value', color);
    },
    onChange: function onChange(v) {
      this.convert(v);
    },
  },
};

/* script */
            var __vue_script__$1 = script$1;
            
/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-color-input"},[_c('input',{ref:"input",staticClass:"ui-color-input__field",domProps:{"value":_vm.value},on:{"change":function($event){_vm.onChange($event.target.value);}}})])};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) { return }
    inject("data-v-2c8e9336_0", { source: ".ui-color-input__field{font-size:12px;font-family:Monaco;font-weight:600;appearance:none;border:0;padding:4px 0;outline:0;border-bottom:1px solid #000;width:100%}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "UiColorInput.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$1() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (css.map) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
          // http://stackoverflow.com/a/26603875
          code +=
            '\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
            ' */';
        }

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var UiColorInput = __vue_normalize__$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    __vue_create_injector__$1,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$2 = {
  name: 'ui-icon',
  props: {
    icon: {
      type: String,
    },
    size: {
      type: Number,
      default: 24,
    },
  },
  methods: {
    is: function is(name) {
      return this.icon === name;
    },
  },
};

/* script */
            var __vue_script__$2 = script$2;
            
/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"ui-icon",attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","viewBox":"0 0 24 24","width":_vm.size,"height":_vm.size}},[(_vm.is('lock-closed'))?[_c('path',{staticClass:"fill no-stroke",attrs:{"d":"M17.7,10.5H6.3c-0.4,0-0.8,0.5-0.8,1v9c0,0.5,0.3,1,0.8,1h11.5c0.4,0,0.8-0.5,0.8-1v-9C18.5,11,18.2,10.5,17.7,10.5z M12.8,16.2v1.7c0,0.4-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.8v-1.7c-0.4-0.3-0.8-0.7-0.8-1.3c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5C13.5,15.4,13.2,15.9,12.8,16.2z"}}),_vm._v(" "),_c('path',{staticClass:"stroke no-fill",attrs:{"d":"M18.5,20.5c0,0.5-0.3,1-0.8,1H6.3c-0.4,0-0.8-0.5-0.8-1v-9c0-0.6,0.3-1,0.8-1h11.5c0.4,0,0.8,0.4,0.8,1V20.5z"}}),_vm._v(" "),_c('path',{staticClass:"stroke no-fill",attrs:{"d":"M15.5,10c0,0,0-3,0-4c0-1.9-1.6-3.5-3.5-3.5S8.5,4.1,8.5,6c0,1,0,4,0,4"}})]:(_vm.is('lock-open'))?[_c('path',{staticClass:"fill no-stroke",attrs:{"d":"M13.5,14.9c0-0.8-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5c0,0.6,0.3,1,0.8,1.3v1.7c0,0.4,0.3,0.8,0.8,0.8s0.8-0.3,0.8-0.8v-1.7C13.2,15.9,13.5,15.4,13.5,14.9z"}}),_vm._v(" "),_c('path',{staticClass:"stroke no-fill",attrs:{"d":"M18.5,20.5c0,0.5-0.3,1-0.8,1H6.3c-0.4,0-0.8-0.5-0.8-1v-9c0-0.6,0.3-1,0.8-1h11.5c0.4,0,0.8,0.4,0.8,1V20.5z"}}),_vm._v(" "),_c('path',{staticClass:"stroke no-fill",attrs:{"d":"M15.5,10c0,0,0-3,0-4c0-1.9-1.6-3.5-3.5-3.5S8.5,4.1,8.5,6c0,1,0,1.5,0,1.5"}})]:(_vm.is('arrow-up'))?[_c('polyline',{staticClass:"no-fill stroke",attrs:{"points":"7,14 12,9 17,14 "}})]:(_vm.is('arrow-down'))?[_c('polyline',{staticClass:"no-fill stroke",attrs:{"points":"17,9 12,14 7,9 "}})]:(_vm.is('sync'))?[_c('path',{staticClass:"stroke no-fill",attrs:{"d":"M17.3,6.7c-1.4-1.4-3.2-2.2-5.3-2.2c-4.1,0-7.5,3.4-7.5,7.5"}}),_vm._v(" "),_c('path',{staticClass:"stroke no-fill",attrs:{"d":"M6.7,17.3c1.4,1.4,3.2,2.2,5.3,2.2c4.1,0,7.5-3.4,7.5-7.5"}}),_vm._v(" "),_c('polyline',{staticClass:"stroke no-fill",attrs:{"points":"2,8 4.5,12 8.5,9.5"}}),_vm._v(" "),_c('polyline',{staticClass:"stroke no-fill",attrs:{"points":"22,16 19.5,12 15.5,14.5"}})]:_vm._e()],2)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  var __vue_inject_styles__$2 = function (inject) {
    if (!inject) { return }
    inject("data-v-030b76fe_0", { source: ".fill[data-v-030b76fe]{fill:currentColor}.stroke[data-v-030b76fe]{stroke:currentColor;stroke-width:2;stroke-miterlimit:10;stroke-linecap:round}.no-fill[data-v-030b76fe]{fill:none}.no-stroke[data-v-030b76fe]{stroke:none;stroke-width:0}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$2 = "data-v-030b76fe";
  /* module identifier */
  var __vue_module_identifier__$2 = undefined;
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* component normalizer */
  function __vue_normalize__$2(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "UiIcon.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$2() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$2.styles || (__vue_create_injector__$2.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (css.map) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
          // http://stackoverflow.com/a/26603875
          code +=
            '\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
            ' */';
        }

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var UiIcon = __vue_normalize__$2(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    __vue_create_injector__$2,
    undefined
  );

//

var script$3 = {
  name: 'ui-icon-button',
  props: {
    icon: {
      type: String,
    },
    active: {
      type: Boolean,
    },
    iconSize: {
      type: Number,
      default: 24,
    },
    padding: {
      type: Number,
      default: 6,
    },
    margin: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    styles: function styles() {
      var ref = this;
      var iconSize = ref.iconSize;
      var padding = ref.padding;
      var margin = ref.margin;

      return {
        width: (iconSize + "px"),
        height: (iconSize + "px"),
        padding: (padding + "px"),
        borderWidth: (margin + "px"),
      };
    },
    size: function size() {
      return this.iconSize + this.padding + this.margin;
    },
  },
  methods: {
    onClick: function onClick(e) {
      this.$emit('click', e);
    },
  },
  components: {
    UiIcon: UiIcon,
  },
};

/* script */
            var __vue_script__$3 = script$3;
            
/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"ui-icon-button",style:(_vm.styles),attrs:{"data-active":_vm.active},on:{"click":_vm.onClick}},[_c('UiIcon',{attrs:{"icon":_vm.icon,"size":_vm.iconSize}})],1)};
var __vue_staticRenderFns__$3 = [];

  /* style */
  var __vue_inject_styles__$3 = function (inject) {
    if (!inject) { return }
    inject("data-v-f7c2bc68_0", { source: ".ui-icon-button{background-color:none;border-radius:50%;border-style:solid;border-color:transparent;padding:0;box-sizing:content-box;background-clip:padding-box}.ui-icon-button[data-active]{background-color:#000;color:#fff}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$3 = undefined;
  /* module identifier */
  var __vue_module_identifier__$3 = undefined;
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* component normalizer */
  function __vue_normalize__$3(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "UiIconButton.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$3() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$3.styles || (__vue_create_injector__$3.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (css.map) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
          // http://stackoverflow.com/a/26603875
          code +=
            '\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
            ' */';
        }

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var UiIconButton = __vue_normalize__$3(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    __vue_create_injector__$3,
    undefined
  );

//

var script$4 = {
  name: 'ui-widget',
  props: {
    id: {
      type: String,
    },
    active: {
      type: Boolean,
    },
  },
  data: function () { return ({
    x: 0,
    y: 0,
  }); },
  computed: {
    styles: function styles() {
      var ref = this;
      var x = ref.x;
      var y = ref.y;

      return {
        transform: ("translate(" + x + "px, " + y + "px)"),
      };
    },
  },
  methods: {
    onClick: function onClick() {
      this.$emit('select', this.id);
    },
  },
  mounted: function mounted() {
    var this$1 = this;

    var ref = this;
    var x = ref.x;
    var y = ref.y;
    var $el = ref.$el;

    select($el)
      .datum({ x: x, y: y })
      .call(
        drag()
          .subject(function (d) { return d; })
          .on('drag', function (d) {
            var ref = event;
            var x = ref.x;
            var y = ref.y;

            x = Math.round(x);
            y = Math.round(y);

            d.x = x;
            d.y = y;

            this$1.x = x;
            this$1.y = y;
          })
      );
  },
};

/* script */
            var __vue_script__$4 = script$4;
            
/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-widget",style:(_vm.styles),attrs:{"data-active":_vm.active},on:{"click":_vm.onClick}},[_c('div',{staticClass:"ui-widget__content",on:{"mousedown":function($event){$event.stopPropagation();}}},[_vm._t("default")],2)])};
var __vue_staticRenderFns__$4 = [];

  /* style */
  var __vue_inject_styles__$4 = function (inject) {
    if (!inject) { return }
    inject("data-v-bb815cb8_0", { source: ".ui-widget{display:inline-block;padding:24px;background-color:#fff;box-shadow:0 0 8px 0 rgba(0,0,0,.3);border-radius:6px}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$4 = undefined;
  /* module identifier */
  var __vue_module_identifier__$4 = undefined;
  /* functional template */
  var __vue_is_functional_template__$4 = false;
  /* component normalizer */
  function __vue_normalize__$4(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "UiWidget.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$4() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$4.styles || (__vue_create_injector__$4.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (css.map) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
          // http://stackoverflow.com/a/26603875
          code +=
            '\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
            ' */';
        }

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var UiWidget = __vue_normalize__$4(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    __vue_create_injector__$4,
    undefined
  );

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  UiButton: UiButton,
  UiColorInput: UiColorInput,
  UiIcon: UiIcon,
  UiIconButton: UiIconButton,
  UiWidget: UiWidget
});

/* global window global */

function install(Vue) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  Object.keys(components).forEach(function (componentName) {
    Vue.component(componentName, components[componentName]);
  });
}

var plugin = {
  install: install,
};

var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
export { tinycolor as Color, UiButton, UiColorInput, UiIcon, UiIconButton, UiWidget };
