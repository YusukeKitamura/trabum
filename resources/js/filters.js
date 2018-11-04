// グローバルに使用するVue filterを定義
// js内でも同じ関数をimportして使えるようにhelpers.jsに定義すること

import { formatDate, formatMoney, formatNumber } from './utilities/helpers'

export default function(Vue) {
    // 日付のフォーマット
    Vue.filter('formatDate', function(value, format = 'YYYY-MM-DD') {
        return formatDate(value, format);
    });
    // 金額のフォーマット
    Vue.filter('formatMoney', function(value) {
        return formatMoney(value)
    });
    // 数字のフォーマット
    Vue.filter('formatNumber', function(value, unit = '') {
        return formatNumber(value, unit);
    });
}