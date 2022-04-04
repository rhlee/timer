const factor = 10 / 100;

setTimeout(
  () => {
    minutes.addEventListener(
      "keyup",
      event => {if (event.key === "Enter") {
        document.body.classList.add("active");
        const seconds = minutes.value;
        const factorSeconds = () => seconds * factor * Math.random();
        const rootStyle = document.documentElement.style;
        rootStyle.setProperty("--time", (seconds - factorSeconds()) +  "s");
        rootStyle.setProperty("--duration", (factorSeconds() * 2) +  "s");
        minutes.remove();
        document.documentElement.requestFullscreen();
      }}
    );
  },
  0
);
