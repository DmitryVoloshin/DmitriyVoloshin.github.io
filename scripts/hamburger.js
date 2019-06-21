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


    
})