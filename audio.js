const $btn = document.querySelector('.play_pause');

const $play = document.querySelector('.play_pause span:first-child');

const $pause = document.querySelector('.play_pause span:last-child');

const player = document.querySelector('#audioPlayer');

const progress = document.querySelector('.bar');

const progress_bar = document.querySelector('.progress_bar');

const previous = document.querySelector('.left_control span')

const next = document.querySelector('.right_control span:first-child')

// Récupérer tous les éléments source
const sources = document.querySelectorAll('audio source');

// Parcourir toutes les sources audio

// next.addEventListener('click', function () {
//   for(let i = 0; i < sources.length; i++) {
//     const source = sources[0];
//     i += 1 
//     console.log(source.src); // afficher le lien de la source
//   }
  


let currentSourceIndex = 0;

previous.addEventListener('click', () => {
  currentSourceIndex--;
  if (currentSourceIndex < 0) {
    currentSourceIndex = player.querySelectorAll('source').length - 1;
  }
  updateSource();
});

next.addEventListener('click', () => {
  currentSourceIndex++;
  if (currentSourceIndex >= player.querySelectorAll('source').length) {
    currentSourceIndex = 0;
  }

  updateSource();
});


function updateSource() {
  player.pause();
  player.querySelectorAll('source').forEach((source, index) => {
    if (index === currentSourceIndex) {
      source.removeAttribute('src');
      source.setAttribute('src', source.getAttribute('data-src'));
    } else {
      source.setAttribute('src', '');
    }
  });
  player.load();
  player.play();
}

player.querySelectorAll('source').forEach((source) => {
  source.setAttribute('data-src', source.getAttribute('src'));
});




$btn.addEventListener('click', () => {
    if ($play.style.display !== 'none' || player.paused) {
      $play.style.display = 'none';
      $pause.style.display = 'inline-block';
      player.play();
    } else {
      $pause.style.display = 'none';
      $play.style.display = 'inline-block';
      player.pause();
    }
  });

//   function update(player) {

//     var duration = player.duration;    // Durée totale

//     var time     = player.currentTime; // Temps écoulé

//     var fraction = time / duration;

//     var percent  = Math.ceil(fraction * 100);
    

//     var progress_bar = document.querySelector('.progress_bar');
//     var debut = document.querySelector('.debut');
//     var finish = document.querySelector('.finish');



//     progress_bar.style.width = percent + '%';
    
//     debut.innerHTML = time;
//     finish.innerHTML = duration;

// }



function update(player) {
  var duration = player.duration;    // Durée totale
  var time = player.currentTime;    // Temps écoulé
  var percent = Math.ceil((time / duration) * 100);

  var progress_bar = document.querySelector('.progress_bar');
  var debut = document.querySelector('.debut');
  var finish = document.querySelector('.finish');

  progress_bar.style.width = percent + '%';

  // Convertir le temps en minutes et secondes
  var time_minutes = Math.floor(time / 60);
  var time_seconds = Math.round(time - (time_minutes * 60));
  var duration_minutes = Math.floor(duration / 60);
  var duration_seconds = Math.round(duration - (duration_minutes * 60));

  debut.innerHTML = time_minutes + ':' + (time_seconds < 10 ? '0' : '') + time_seconds;
  finish.innerHTML = duration_minutes + ':' + (duration_seconds < 10 ? '0' : '') + duration_seconds;
}


progress.addEventListener('click', function (event) {
  console.log('click');
  // if (player.paused || $play.style.display !== 'none' || player.paused){
  //   player.play();
  //   $play.style.display = 'none';
  //   $pause.style.display = 'inline-block';
  // } 
  const time = event.offsetX / progress.offsetWidth * player.duration;
  console.log(time);
  player.currentTime = time;
});




        let slideIndex = 1;
    showSlides(slideIndex);
  
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function showSlides(n) {
      let i;

      let slides = document.getElementsByClassName("poster");

      if (n > slides.length) {slideIndex = 1}    

      if (n < 1) {slideIndex = slides.length}

      for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";  

      }

      slides[slideIndex-1].style.display = "block";  

    }