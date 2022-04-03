setTimeout(
  () => {
    minutes.addEventListener(
      "keyup",
      event => {
        if (event.key === "Enter")
          alert(123);
      }
    );
  },
  0
);
