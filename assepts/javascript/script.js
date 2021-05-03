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

//play video

const videoElement = document.querySelector('.myPlayer');
const btnVideo = document.querySelector('.vid_icon');
const videoTitile = document.querySelector('.video_title');
const videoUnderTitile = document.querySelector('.under');

btnVideo.addEventListener('click', () => {
  if (videoElement.play() ) {
    videoTitile.innerHTML = "";
    videoUnderTitile.innerHTML = "";
    btnVideo.innerHTML = '';
  } else  {
    videoTitile.innerHTML = "Explore Our Awesomeness";

    videoUnderTitile.innerHTML = "Click to play the video";
  }
})


//work with Forma
const btnForm = document.querySelector('.btnSubmit');

btnForm.addEventListener('click',  () => {
valid();
})

function getValue (){
const name = document.querySelector('input[type= "name"]').value;
const email = document.querySelector('input[type= "email"]').value;
const subject = document.querySelector('input[type="Subject"]').value;
const project = document.querySelector('input[type="Project"]').value;
const textarea = document.querySelector('textarea').value;
const userInfo = {name, email, subject,project, textarea}
console.log(userInfo);
}

function valid() {
const inp = document.querySelector('input');
  if (inp.value !== "") { inp.classList.add('error');
} else {
  inp.classList.remove('error');
  getValue();
}
}