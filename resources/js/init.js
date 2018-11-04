// アプリケーション共通ライブラリのロード

// Vue
import Vue from 'vue'

// axios
import axios from './utilities/axios.js'

// Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// グローバルfilterのロード
import Filters from './filters'
Vue.use(Filters);

// グローバルcomponentのロード
import Components from './components'
Vue.use(Components);

// Vuetify
import vColors from 'vuetify/es5/util/colors'
import Vuetify from 'vuetify'
import ja from './i18n/vuetify/ja'

// sassで定義した変数のインポート
import variables from '../sass/_variables.scss'

Vue.use(Vuetify, {
    theme: {
        primary: variables.primary,
        secondary: variables.secondary,
        accent: variables.accent,
        error: variables.error,
        info: variables.info,
        success: variables.success,
        warning: variables.warning,
    },
    lang: {
        locales: { ja },
        current: 'ja'
    },
    options: {
        minifyTheme: function (css) {
          return process.env.NODE_ENV === 'production'
            ? css.replace(/[\s|\r\n|\r|\n]/g, '')
            : css
        }
    }
})

// VueRouter
import router from './router'

// グローバルmixins
import Common from './mixins/Common'

export { Vue, Vuex, router, Common }
