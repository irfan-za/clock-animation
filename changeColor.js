const  button=document.getElementsByClassName("changeColor")[0];
button.addEventListener('click',()=>{
    document.getElementsByTagName('html')[0].classList.toggle('changeOn');
});


const sidebarMobile=document.getElementsByClassName('sidebarMobile')[0];
sidebarMobile.addEventListener('click',()=>{
    const containerchangeColor=document.getElementsByClassName('container-changeColor')[0];
containerchangeColor.classList.toggle('sideON');
});