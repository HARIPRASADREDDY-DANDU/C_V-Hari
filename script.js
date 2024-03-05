let toggle = document.getElementById('sideToggle');
let arrow = document.querySelector('.sideArrow');
let arrowSymbol = document.querySelector('#icon');
let imageBtn =  document.querySelector('.imageHamburger')
let profileBar = document.getElementById('profileBar');
let right = document.querySelector('.rightContent');
let close = document.querySelector('.close_icon');

arrow.addEventListener('click',()=>{
    if(toggle.classList.contains('deactivated')){

        toggle.classList.remove('deactivated')
        arrowSymbol.textContent = 'chevron_right';
    }
    else{
        toggle.classList.add('deactivated')
        arrowSymbol.textContent = "chevron_left";
    }
})
imageBtn.addEventListener('click',()=>{
    if(imageBtn){
        profileBar.style.marginLeft = '0px';
        profileBar.style.opacity = '1';
        right.style.display = 'none';
    }
    
})
close.addEventListener('click',()=>{
    profileBar.style.marginLeft = '-400px';
    profileBar.style.opacity = '0';
    right.style.display = 'flex';
})

