const menuBtn = document.querySelector('.mobilenav');
let nav = document.querySelector('body > header > div > nav > div:nth-child(2)')

let menu = document.querySelectorAll('body > header > div > nav > div:nth-child(2) > ul > li')

console.log(menu)

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    nav.classList.remove('none')
    nav.classList.add('block');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    nav.classList.remove('block')
    nav.classList.add('none');
    menuOpen = false;
  }
});



menu.forEach((link) =>{
    link.addEventListener('click', e => {
        e.preventDefault()
        // console.log(e.target)
        // if (e.target.classList.contains('arrow')){
            let childrens = Array.from(link.children)
            subMenuOpen = childrens[2].classList.contains('open')
            if(subMenuOpen){
                childrens[2].classList.remove('open');
                childrens[2].classList.add('close');
            }
            else {
                childrens[2].classList.remove('close');
                childrens[2].classList.add('open');
            }

        // }
    })
})