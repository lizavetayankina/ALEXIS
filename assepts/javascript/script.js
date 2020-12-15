
const anchors = document.querySelectorAll('a[href^="#"]')

for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() 
   const about, focus, portfolio, team, work_step, price, Testimonials = anchor.getAttribute('href');
    document.querySelector(about + focus + portfolio + team + work_step + price + Testimonials).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

