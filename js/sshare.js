
$('.exit-point').click(function(){
    $('#share-box').fadeOut(500);
});
function ShareDialogue(){  
    $('#share-box').fadeIn(500);
  
}
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
function copybtn(){
    var inp = document.getElementById('sharelink');
    inp.setSelectionRange(0, inp.value.length);
    navigator.clipboard.writeText(inp.value);
    inp.classList.add('input-copied');
    $('.copy-btn').text( "منسوخ");
    $('.copy-btn').removeClass('text-primary');
    $('.copy-btn').addClass('text-success');
  }