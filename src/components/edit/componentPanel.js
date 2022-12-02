const components = require.context('./', false, /\.vue$/)
let editComponent = components.keys().map((i) => {
  let key = i.match(/\/(\S*)\./)[1]
  return [key, () => import(`@/components/edit/${key}.vue`)]
})
const editComponentPanelMap = new Map(editComponent)

export default editComponentPanelMap
