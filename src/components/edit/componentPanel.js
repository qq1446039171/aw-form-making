const editComponentPanelMap = new Map([
  [
    "input",
    () =>
      import("@/components/edit/input.vue")
  ],
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
