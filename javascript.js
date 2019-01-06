let octagon = document.querySelectorAll('#octagon');
let h2 = document.querySelectorAll('.txt-element h2');
let p = document.querySelectorAll('.txt-element p');
let span = document.querySelectorAll('#octagon span');
let toglbtn = document.querySelector('.toggle-content span');
let togldiv = document.querySelector('.toggle-content');
let insideContent = document.querySelector('.viewed-content');
let txtAnimation = document.querySelector('.animated-txt');

window.onload = function(){
var duration = setInterval(textAnimation, 200);
var count = 0;

function textAnimation(e){
	count++;
	if(count == 1){
	   txtAnimation.querySelector('.one').style.display = 'block';
	}else if(count == 10){
	   txtAnimation.querySelector('.two').style.display = 'block';
	   txtAnimation.querySelector('.one').style.display = 'none';
	}else if(count == 20){
	   txtAnimation.querySelector('.three').style.display = 'block';
	   txtAnimation.querySelector('.two').style.display = 'none';
	}else if(count == 30){
	   txtAnimation.querySelector('.four').style.display = 'block';
	   txtAnimation.querySelector('.three').style.display = 'none';
	}else if(count == 40){
		clearInterval(duration);
	}
}
}

toglbtn.addEventListener('click', function(){
	if(togldiv.style.width === '80%'){
		togldiv.style.width = '20%';
		togldiv.querySelector('span').style.background = 'linear-gradient(30deg, #0030b8, #022689)';
		insideContent.style.justifyContent = 'center';
		insideContent.style.marginLeft = '28%';
	}else{
		togldiv.style.width = '80%';
	    togldiv.querySelector('span').style.background = '#FF0C70';
		insideContent.style.justifyContent = 'flex-start';
		insideContent.style.marginLeft = '0%';
	}
})

var counter = 0;
window.addEventListener('scroll', function() {
var position = this.scrollY;
if(position >= 3400){
var duration = setInterval(countIncreament, 1);
function countIncreament(){
    counter++;
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
}
}
});

octagon.forEach(function(itm){
	itm.addEventListener('click', function() {
		for(let i = 0; i < span.length; i++){
			span[i].style.backgroundColor = '#252839';
		}
		for(let i = 0; i < h2.length; i++){
			h2[i].classList.remove('active');
		}
		for(let i = 0; i < p.length; i++){
			p[i].classList.remove('active');
		}
	  itm.firstElementChild.style.backgroundColor = '#10B6E3';
	  itm.parentElement.querySelector('h2').classList.add('active');
	  itm.parentElement.querySelector('p').classList.add('active');
	})
})
