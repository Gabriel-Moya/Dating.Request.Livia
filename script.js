function sim() {
  alert("Será um prazer te fazer feliz pelo resto de nossas vidas! :)");
  location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
}

function desvia(btn) {
  btn.style.position = 'absolute';
  btn.style.bottom = geraPosicao(10, 90);
  btn.style.left = geraPosicao(10, 90);
  console.log('opa, desviei...');
}

function geraPosicao(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}

window.onload = () => {
  const element = document.getElementById('typing-effect');
  const titleText = 'ivia, você aceita... namorar comigo?';
  let index = 0;

  function typeWriter() {
    if (index < titleText.length) {
      element.textContent += titleText.charAt(index);
      index++;
      let timerCount = 120;

      if (titleText.charAt(index) === '.') {
        timerCount = 500;
      }

      if (index === 21) {
        timerCount = 1000;
      }

      setTimeout(typeWriter, timerCount);
    }
  }

  element.classList.add('typing-cursor');
  typeWriter();
}