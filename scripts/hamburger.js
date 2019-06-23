// NAVIGATION HAMBURGER
let $lastOpened = false;
//  close the last opened menu 
$(document).click(()=>{
  if($lastOpened){
    $lastOpened.removeClass('open');
  }
});
$(document).on('click', '.hamburger-pulldown_toggle', (event)=>{
  let el = $(event.currentTarget);
  event.preventDefault();
  event.stopPropagation();
  if(el.hasClass('open')){
    el.removeClass('open');
  }else{
    if($lastOpened){
      $lastOpened.removeClass('open');
    }
    el.addClass('open');
    $lastOpened = el;
  }
});
