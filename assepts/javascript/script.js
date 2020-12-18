//navagation menu 
const menu = document.querySelectorAll('a[href^="#"]');
for(let nav of menu) {
  nav.addEventListener("click", function(e) {
    e.preventDefault() 
    const blockID = nav.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

const videoElement = document.querySelector('.myPlayer');
const btnVideo = document.querySelector('.vid_icon');

btnVideo.addEventListener('click', () => {
videoElement.play();
})

const btnForm = document.querySelector('.btnSubmit');

btnForm.addEventListener('click', function () {
alert('dfdfv');
})