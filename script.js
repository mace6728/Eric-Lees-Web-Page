/*
112550043 李知恆 第三次作業 11/1
112550043 Chih-Heng Lee The Third Homework 11/1
*/

function sigmaRespect() {
  const displacement = ['moa1', 'moa2', 'moa3', 'moa4', 'moa5', 'moa6'];
  const MOA = displacement[Math.floor(Math.random() * displacement.length)];
  const parent = document.querySelector(".sigma");
  const moa = document.createElement("div");
  moa.textContent = "🗿";
  moa.classList.add("moa");
  moa.classList.add(MOA);
  moa.classList.add("visible");
  parent.appendChild(moa);

  setTimeout(() => {
    parent.removeChild(moa);
  }, 5000);
}

function openNewTab() {

  const url = "https://google.com";

  const windowName = "_blank";

  window.open(url, windowName);
}

openNewTab();

function openNewWindow() {

  const url = "https://google.com";

  const windowName = "Window";
  const windowFeatures = "width=800,height=600,resizable,scrollbars";

  window.open(url, windowName, windowFeatures);
}

openNewWindow();

document.addEventListener("DOMContentLoaded", function () {

  showPopup(false);

  setTimeout(function () {
    showAdPopup();
  }, 3000);

  const openPopupBtn = document.getElementById("openPopupBtn");
  if (openPopupBtn) {
    openPopupBtn.addEventListener("click", function () {
      showPopup(true);
    });
  }

  startTimer();

  window.addEventListener('scroll', handleScroll);
  handleScroll(); 

  setInterval(kidPopup, 8000);
  setInterval(typeWriter, 10000);

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
      ctx.fillStyle = 'gold';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      if (particles[i].size <= 0.2) {
        particles.splice(i, 1);
        i--;
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
  }

  document.addEventListener('click', function (event) {
    const x = event.clientX;
    const y = event.clientY;
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle(x, y));
    }
  });

  animate();
});

function showPopup(isScrollable) {
  const popup = document.getElementById("popup");
  const popupContent = document.querySelector(".popup-content");
  popup.style.display = "block";
  popupContent.style.overflow = isScrollable ? "auto" : "hidden";
}

function showAdPopup() {
  const adPopup = document.getElementById("adPopup");
  adPopup.style.display = "block";
}

function kidPopup() {
  const kidPopup = document.getElementById("kidPopup");
  kidPopup.style.display = "block";
  setTimeout(() => {
    kidPopup.style.display = "none";
  }, 5000);
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

function closeAdPopup() {
  const adPopup = document.getElementById("adPopup");
  adPopup.style.display = "none";
}

document.getElementById('changeColor').addEventListener('click', () => {
  const colors = ['#ffffff81', '#cfffc581', '#ffe1b181', '#c5ffe581', '#c5ffff81', '#dec5ff81'];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

window.onload = typeWriter;
const text = 'sigma respect button🗿=>';
let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById('typing').innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
  if (index >= text.length) {
    setTimeout(() => {
      typeRemover()
    }, 3000)
  }
}

function typeRemover() {
  if (index >= 0) {
    document.getElementById('typing').innerHTML = text.slice(0, index - text.length - 1);
    index--;
    setTimeout(typeRemover, 200);
  }
}

function startTimer() {
  const timeDisplay = document.getElementById("timeDisplay");
  let startTime = Date.now();

  setInterval(function () {
    let elapsedTime = (Date.now() - startTime) / 1000;
    let integerPart = Math.floor(elapsedTime).toString().padStart(4, '0');
    let decimalPart = (elapsedTime % 1).toFixed(1).substring(2); 
    timeDisplay.textContent = `${integerPart}.${decimalPart}s`;
  }, 100); 
}

function handleScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const windowHeight = window.innerHeight;

  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < windowHeight - 100) { 
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

const texts = ["Welcome", "ToMy", "WebPage"];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("enhancedTyping");

function type() {
  const currentText = texts[textIndex];
  if (charIndex < currentText.length) {
    const span = document.createElement('span');
    span.textContent = currentText.charAt(charIndex);
    span.classList.add('char');
    typingElement.appendChild(span);

    setTimeout(() => span.classList.add('show'), 50);

    charIndex++;
    setTimeout(type, 150); 
  } else {
    setTimeout(deleteText, 1000); 
  }
}

function deleteText() {
  const chars = typingElement.querySelectorAll('.char');
  if (chars.length > 0) {
    const lastChar = chars[chars.length - 1];
    lastChar.classList.remove('show'); 
    setTimeout(() => {
      lastChar.remove(); 
      setTimeout(deleteText, 100); 
    }, 300); 
  } else {
    textIndex = (textIndex + 1) % texts.length; 
    charIndex = 0;
    setTimeout(type, 500); 
  }
}

type(); 

const circle = document.getElementById('circle');

document.addEventListener('mousemove', (e) => {
  circle.style.transform = `translate(${e.clientX-7.5}px, ${e.clientY-7.5}px)`;
});