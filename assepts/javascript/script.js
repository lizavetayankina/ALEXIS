
const menu = document.querySelectorAll('a[href^="#"]')

for(let nav of menu) {
  nav.addEventListener("click", function(e) {
    e.preventDefault() 
   const about, focus, portfolio, team, work_step, price, Testimonials = anchor.getAttribute('href');
    document.querySelector(about + focus + portfolio + team + work_step + price + Testimonials).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

const videoElement = document.querySelector('.myPlayer');
const btnVideo = document.querySelector('.vid_icon');

btnVideo.addEventListener('click', () => {
  //videoElement.play();
  alert('dvgds')
  
})


