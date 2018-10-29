function $(el){
    return document.querySelector(el);
}

    let toggleMenu = $(".toggleMenu");
   
    let nav = $(".nav");
    let body = $("body");
    let allLi = document.querySelectorAll(".nav>ul>li");
    let arrayChildren = Array.prototype.slice.call(allLi);
    let status = false;
    let x = 0;
     window.addEventListener('resize', resizeHeandler); 
     toggleMenu.addEventListener('click', clickHeandler);
    
   
     //РАЗМЕР ОКНА
    function resizeHeandler(){
      x = window.innerWidth;
      if(x > 900){
        status = false; 
      
   
        for(let i =0; i < arrayChildren.length; i++){
            arrayChildren[i].classList.remove("openMenu");
            arrayChildren[i].style.transition = "none"

        }
    }
      else if(x < 895){
       
        
        
        
       }
     }
      
  //КЛИК СОБЫТИЕ

     function clickHeandler(){
    if(status === false ){
      /*   nav.classList.add('openMenu'); */
      for(let i =0; i < arrayChildren.length;i++){
        arrayChildren[i].style.transition = "all 0.5s ease"
    }
      nav.classList.add("openNav");
       setTimeout(animation,0,arrayChildren,status) 
           status=true;
      } 
      else if(status === true){
         animation(arrayChildren,status); 
          setTimeout(function(){
            nav.classList.remove("openNav");
            for(let i =0; i < arrayChildren.length;i++){
                arrayChildren[i].style.transition = "none"
            }
          },500) 
      
           status = false;
          /*  nav.classList.remove('openMenu'); */
          
      } 
  }

  function animation(el,state) {
    for (let i = 0; i < el.length; i++) {
        if(state == false){
      setTimeout(function() {
        el[i].classList.add("openMenu");
      }, i + "00" - 100);
    }
    else if(state == true){
        setTimeout(function() {
            el[i].classList.remove("openMenu");
          }, i + "00" - 100);
    }
    }
  }
  
  function backAnimation(el) {
    let a = 0;
    for (let i = el.length-1; i >= 0; i--) {
      a += 50;
        setTimeout(function() {
              el[i].classList.remove("openMenu");
        }, a);
    }
  }
