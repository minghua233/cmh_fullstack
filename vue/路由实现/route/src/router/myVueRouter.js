class VueRouter {

}
VueRouter.install = function () {

}

export default VueRouter



// class Vue {
//   constructor() {
//     _installedPlugins: '' //记录已加载的组件
//   }
// }
// Vue.use = function (plugin) {
//   const installedPlugins = (this._installedPlugins || (this._installedPlugins = [])) // 获得已加载的组件
//   if (installedPlugins.indexOf(plugin) > -1) { // 判断组件是否已被加载，若被加载则退出
//     return this
//   }
//   const args = toArray(arguments, 1)
//   args.unshift(this)
//   if (typeof plugin.install === 'function') {
//     plugin.install.apply(plugin, args)
//   } else if (typeof plugin === 'function') {
//     plugin.apply(null, plugin, args) // applay第一个参数必须接收对象，用null顶替，第二个参数表示this
//   }
//   installedPlugins.push(plugin)
//   return this
// }