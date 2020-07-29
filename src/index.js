import {spitNum} from './card';
import {about} from './about';

const moreBtn = document.querySelector('.loader');
const ul = document.querySelector('.navbar-ul');
const content = document.getElementById('content');

moreBtn.addEventListener('click', function (e){
  spitNum(5); 
})

//loads about 5 cards when the dom loads
document.addEventListener("DOMContentLoaded", function() {
    spitNum(5)
    moreBtn.classList.remove('d-none');
  });

  ul.addEventListener('click', function(e){
   if (e.target.classList.contains('aboutbtn') || e.target.parentElement.classList.contains('aboutbtn')){{
       content.classList.remove('grid-container');
       content.innerHTML = "";
       moreBtn.classList.add('d-none');
       about(1);
   }};
  })