// グローバルに使用するVueコンポーネントを定義

import RMenuContent from './components/common/MenuContent/MenuContent'
import RBreadcrumb from './components/common/BreadCrumb'

export default function(Vue) {
    Vue.component('menu-content', MenuContent);
    Vue.component('bread-crumb', BreadCrumb);
}