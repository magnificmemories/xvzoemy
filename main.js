const secondsToParty = document.getElementById('seconds-to-party')
const daysToParty = document.getElementById('days-to-party')
const hoursToParty = document.getElementById('hours-to-party')
const minutesToParty = document.getElementById('minutes-to-party')
// Definir la fecha y hora del evento (puedes personalizar esto)
const eventDate = new Date('2024-07-26T19:30:00').getTime();

// Actualizar la cuenta regresiva cada segundo
const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  // Calcular días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const pDays = document.createElement('p')
  daysToParty.innerHTML = ''
  pDays.textContent = days
  pDays.classList.add("p-days")
  daysToParty.appendChild(pDays)

  const pHours = document.createElement('p')
  hoursToParty.innerHTML = ''
  pHours.textContent = hours
  pHours.classList.add("p-hours")
  hoursToParty.appendChild(pHours)

  const pMinutes = document.createElement('p')
  minutesToParty.innerHTML = ''
  pMinutes.textContent = minutes
  pMinutes.classList.add("p-minutes")
  minutesToParty.appendChild(pMinutes)

  const pSeconds = document.createElement('p')
  secondsToParty.innerHTML = ''
  pSeconds.textContent = seconds
  pSeconds.classList.add("p-seconds")
  secondsToParty.appendChild(pSeconds)
  
  // Si la cuenta regresiva ha terminado, mostrar un mensaje
  if (distance < 0) {
    clearInterval(countdown);
    pDaysParty.innerHTML = '00';
    pHoursParty.innerHTML = '00'
    pMinutesParty.innerHTML = '00'
    pSecondsParty.innerHTML = '00'
  }
}, 1000);


document.addEventListener('DOMContentLoaded', function() {
    const musicButton = document.getElementById('musicButton');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const welcomeCard = document.getElementById('welcomeCard');
    const enterButton = document.getElementById('enterButton');
    const content = document.getElementById('content');

    document.body.addEventListener('touchstart', () => {
    backgroundMusic.play();
    backgroundMusic.pause();
    }, false);

    // Función para reproducir música
    const playMusic = () => {
        backgroundMusic.play().then(() => {
            console.log("Music playing.");
        }).catch(error => {
            console.error("Error playing the music:", error);
            alert("La música no se puede reproducir automáticamente en Safari. Haga clic en el botón de música para iniciar la reproducción.");
        });
    };

    // Al hacer clic en el botón "Ingresar", reproducir la música y ocultar la tarjeta de bienvenida
    enterButton.addEventListener('click', function() {
        backgroundMusic.currentTime = 0;
        playMusic();
        welcomeCard.style.display = 'none';
        content.classList.remove('blurred');
        document.body.classList.remove('no-scroll');
    });

    // Escucha el cambio de estado del checkbox para pausar o reproducir la música
    musicButton.addEventListener('change', function() {
        if (musicButton.checked) {
            playMusic();
        } else {
            backgroundMusic.pause();
        }
    });

    // Aplicar desenfoque al contenido cuando la tarjeta de bienvenida está visible
    content.classList.add('blurred');
    document.body.classList.add('no-scroll');
});