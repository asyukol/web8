$('.find_out').click(function() {
    history.pushState(null, '', '/form');
    $('.popup').show();
    $('.popup_bg').show();
    
    let newname = localStorage.getItem('name');
    let newmail = localStorage.getItem('mail');
    let newcomment = localStorage.getItem('comment');
    document.getElementById('form_name').value = newname;  
    document.getElementById('form_mail').value = newmail;  
    document.getElementById('form_comment').value = newcomment;    
}) 
$('.popup_bg').click(function() { 
    $('.popup_bg, .popup').hide();
    history.back();
})
window.onpopstate = function(event) {
    $('.popup_bg, .popup').hide();
}
function remember() {
    let name = document.getElementById('form_name').value; 
    let mail = document.getElementById('form_mail').value;
    let comment = document.getElementById('form_comment').value;
    localStorage.setItem('name', name);
    localStorage.setItem('mail', mail);
    localStorage.setItem('comment', comment);
}
function forget() {
    localStorage.clear();
}
