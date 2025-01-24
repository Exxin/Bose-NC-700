
function valid(el) {
    if (!el.value.trim().length) {
      el.value = "! Error";
      el.classList.add("err");
    } else el.classList.remove("err");
  }
