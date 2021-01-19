// burger
const body = document.body;
const burger = document.querySelector('.header__inner > .burger');
const nav = document.querySelector('.header__inner > nav');

burger.addEventListener('click', function(){
   burger.classList.toggle('active');
   nav.classList.toggle('active');
   body.classList.toggle('burger-active');
} );

// menu size

function menuSizeTab() {
   let menuSize = document.querySelectorAll('.menu__size');

   let btns = document.querySelectorAll('.size-btn');

   let dataBtn;
   
      btns.forEach(item => {
      item.addEventListener('click', function() {

         let parent = item.parentNode;

         parent.querySelectorAll('span').forEach(ite => {
            ite.classList.remove('active');
         });  
         parent.classList.remove('btn-1');
         parent.classList.remove('btn-2');
         parent.classList.remove('btn-3');
         
         dataBtn = item.getAttribute('data-tab-name');
         parent.classList.add(dataBtn);
         item.classList.add('active');

         let arr = parent.nextElementSibling.querySelectorAll('span');

         console.log(arr);

         for(let item of arr) {
            if (item.classList.contains(dataBtn)) {
               item.classList.add('active');
            } else {
               item.classList.remove('active');
            }
         }
      });
   });
}
menuSizeTab();