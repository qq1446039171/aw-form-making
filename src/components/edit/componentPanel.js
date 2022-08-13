const editComponentPanelMap = new Map([
  [
    "searchInput",
    () =>
      import("@/components/edit/searchInput.vue")
  ],
  [
    "notice",
    () =>
      import("@/components/edit/notice.vue")
  ],
  [
    "blank",
    () =>
      import("@/components/edit/blank.vue")
  ],
]);

export default editComponentPanelMap;
