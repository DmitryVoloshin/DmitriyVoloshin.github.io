/* Using jQuery for creating modal */
/* for open our modal*/
$(()=>{
    $(".open-modal_button").click(()=>{
        $(".modal").fadeToggle('fast')
    })
});
/* for close when click on X */
$(".modal-close").on('click',(event)=>{
    event.preventDefault(); /* without reload the page */
    $('.modal').fadeOut();
})
/* for close modal everywhere we click */
$(".modal").bind('click',(e)=>{
    let $el = $(e.target);
    if($el.is(".modal-form") || $el.parents('.modal-form').length)return;
    $(".modal").fadeOut()
})