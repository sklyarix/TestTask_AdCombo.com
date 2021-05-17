$(function() {
  if(window.innerWidth <= 1023){
    $('.slider').slick({
      dots: true,
        arrows: true,
        appendDots: $(".slide-m-dots"),
        prevArrow: $(".slide-m-prev"),
        nextArrow: $(".slide-m-next")
    })
  }
})



const dropText = document.querySelectorAll('.dropText');
const dropItem = document.querySelectorAll('.dropItem');
const dropTitle = document.querySelectorAll('.dropTitle');
console.log('dropItem',dropItem)

dropItem.forEach(function(drop){
  drop.addEventListener('click',function(e){
    if (e.target.classList.contains('dropTitle')){
      for(let i=0; i < dropTitle.length; i++ ){
        if(dropTitle[i].classList.contains('dropTitle--active'))
        {
          if(e.target.classList.contains('dropTitle--active')){
            dropTitle[i].classList.toggle('dropTitle--active');
            dropTitle[i].nextElementSibling.classList.toggle('none');
            return
          }else{
            dropTitle[i].classList.toggle('dropTitle--active');
            dropTitle[i].nextElementSibling.classList.toggle('none');
          }
        }
      }
      e.target.classList.toggle('dropTitle--active');
      e.target.nextElementSibling.classList.toggle('none');
    }
  })
})


