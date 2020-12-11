function S(selector) {
  try {
    selected_item = document.querySelector(selector);
    return selected_item;
  } catch (err) {
    console.error(
      "Js-Tools - Simple Selector : Bad Selctor - Get help at https://github.com/Paptoos/js-tools "
    );
    return "Bad Selctor";
  }
}
