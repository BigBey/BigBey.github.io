var i=0;
var image=document.getElementById("my_photo");
// Добавьте свои картинки в массив через запятую
var imgs=new Array('assets/images/me_tallin.jpg', 'assets/images/mushu1.jpg','assets/images/mushu2.jpg');
image.addEventListener('click', imgsrc);
function imgsrc() {
    i++;i%=imgs.length;
    image.src = imgs[i];
    pic_holder.src = imgs[i];
}

var pic_holder = document.getElementById("pic_holder");
image.addEventListener('mouseover', function(event){
    var target = event.target;
    if (target.tagName != "IMG") pic_holder.style.display = 'none';
    else{
            pic_holder.src = target.src;
            pic_holder.style.display = 'block';
    }
});
image.addEventListener('mouseout', function(event){
        pic_holder.style.display = 'none';
});


const modal = document.querySelector('.modal');
const modal_title = document.querySelector('.modal-title');
let modal_overlay = document.querySelector('.overlay-modal');
const show_up_menu = document.querySelector('.show-up-menu');

show_up_menu.addEventListener('click', show_contacts);

function show_contacts(evt) {
    evt.preventDefault();
    modal.classList.add('active');
    modal_overlay.classList.add('active');
    modal_overlay.addEventListener('click', func);
    modal.addEventListener('click', func);
}

func = function () {
    modal.classList.remove('active');
    modal_overlay.classList.remove('active');
    modal_overlay.removeEventListener('click', func, false);
    modal.removeEventListener('click', func, false);
}