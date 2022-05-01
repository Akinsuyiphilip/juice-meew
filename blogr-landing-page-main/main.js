const open = document.getElementById('open');
const links = document.getElementById('linktop');
const hide =  document.getElementById('hide')

open.addEventListener('click', ()=> {
    links.style.display = "inline-block"
    open.style.display = " none";
    hide.style.display = " block"
});

hide.addEventListener('click', ()=> {
    links.style.display = " none";
    open.style.display = " block";
    hide.style.display = "none"
})

