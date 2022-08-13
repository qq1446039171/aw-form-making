const componentPanelMap = new Map([
  ['searchInput', () => import('@/components/panel/searchInput.vue')],
  ['notice', () => import('@/components/panel/notice.vue')],
  ['blank', () => import('@/components/panel/blank.vue')]
])

export default componentPanelMap
