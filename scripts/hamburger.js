// Hamburger
// link to last opend menu
let $lastOpened = false;
// Remove class open
$(document).click(()=>{
    if($lastOpened){
        $lastOpened.removeClass('open')
    }
});
//
$(document).on('click','.hamburger-pulldown_toogle',(event)=>{

    let el = $(event.currentTarget);

    event.preventDefault();
    event.stopPropagation();


    if(el.hasClass('open')){
        el.removeClass('open');
    }else{
        if($lastOpened){
            $lastOpened.removeClass('open')
        }
        el.addClass('open');
        $lastOpened = el
    }

});