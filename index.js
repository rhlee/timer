const factor = 10 / 100;

if ('wakeLock' in navigator) navigator.wakeLock.request('screen')
  .then(
    () => setTimeout(
      () => {
        minutes.addEventListener(
          'keyup',
          event => { if (event.key === 'Enter') {
            document.body.classList.add('active');
            const seconds = minutes.value * 60;
            const factorSeconds = () => seconds * factor * Math.random();
            const rootStyle = document.documentElement.style;
            rootStyle
              .setProperty('--time', (seconds - factorSeconds()) +  's');
            rootStyle.setProperty('--duration', (factorSeconds() * 2) +  's');
            minutes.remove();
            document.documentElement.requestFullscreen();
          } }
        );
      },
      0
    )
  ).catch(alert);
else alert("wakelock not supported");
