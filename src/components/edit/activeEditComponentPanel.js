const editComponentPanelMap = new Map([
  [
    "searchInput",
    () =>
      import("@/components/edit/searchInput.vue")
  ],
]);

export default editComponentPanelMap;
