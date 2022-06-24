const componentPanelMap = new Map([
  ['searchInput', () => import('@/components/panel/searchInput.vue')],
  ['blank', () => import('@/components/panel/blank.vue')]
])

export default componentPanelMap
