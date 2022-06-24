const editComponentPanelMap = new Map([
  [
    "searchInput",
    () =>
      import("@/components/edit/searchInput.vue")
  ],
  [
    "blank",
    () =>
      import("@/components/edit/blank.vue")
  ],
]);

export default editComponentPanelMap;
