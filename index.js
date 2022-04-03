setTimeout(
  () => {
    minutes.addEventListener(
      "keyup",
      event => {if (event.key === "Enter") {
        document.body.classList.add("active");
        document.documentElement.style.setProperty("--time", minutes.value +  "s");
        minutes.remove();
      }}
    );
  },
  0
);
