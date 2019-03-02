const togglebtn = document.querySelector('.toggle-content span');
const togglediv = document.querySelector('.toggle-content');
const insideContent = document.querySelector('.viewed-content');
const txtAnimation = document.querySelector('.animated-txt');
const octagon = document.querySelectorAll('#octagon');
const h2 = document.querySelectorAll('.txt-element h2');
const p = document.querySelectorAll('.txt-element p');
const span = document.querySelectorAll('#octagon span');
const txtArray = ['Clean', 'Powerful', '& Beautiful', 'Code'];
let counter = 0;
let count = 1;


window.onload = ()=> {
setInterval( () => {
	if(count == 1){
	   txtAnimation.textContent = txtArray[0];
	}else if(count == 2){
	   txtAnimation.textContent = txtArray[1];
	}else if(count == 3){
	   txtAnimation.textContent = txtArray[2];
	}else if(count == 4){
	   txtAnimation.textContent = txtArray[3];
	}else if(count == 5){
      count = 0;
	}
	count++;

}, 2000);
}

togglebtn.addEventListener('click', ()=> {
	if(togglediv.style.width === '80%'){
		togglediv.style.width = '20%';
		togglediv.querySelector('span').style.background = 'linear-gradient(30deg, #0030b8, #022689)';
		insideContent.style.justifyContent = 'center';
		insideContent.style.marginLeft = '28%';
	}else{
		togglediv.style.width = '80%';
	    togglediv.querySelector('span').style.background = '#FF0C70';
		insideContent.style.justifyContent = 'flex-start';
		insideContent.style.marginLeft = '0%';
	}
})

window.addEventListener('scroll', ()=> {
let position = this.scrollY;

if(position > 3400){
setInterval(() => {
	if(counter < 1538){
      document.querySelector('.blue-number').textContent = counter;
    }
    if(counter < 749){
      document.querySelector('.aqua-number').textContent = counter;
    }
    if(counter < 1248){
      document.querySelector('.pink-number').textContent = counter;
    }
    if(counter < 937){
      document.querySelector('.yellow-number').textContent = counter;
    }
}, 20);
}
});

octagon.forEach(item =>{
	item.addEventListener('click', ()=> {
		for(let i = 0; i < span.length; i++){
			span[i].style.backgroundColor = '#252839';
		}
		for(let i = 0; i < h2.length; i++){
			h2[i].classList.remove('active');
		}
		for(let i = 0; i < p.length; i++){
			p[i].classList.remove('active');
		}
	  item.firstElementChild.style.backgroundColor = '#10B6E3';
	  item.parentElement.querySelector('h2').classList.add('active');
	  item.parentElement.querySelector('p').classList.add('active');
	})
});
