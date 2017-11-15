(function formInputs() {

  let formInputs = document.querySelectorAll('.form-input');

  for (let formInput of formInputs) 
  {
    let inputs = formInput.querySelectorAll('input, textarea');

    for (let input of inputs) 
	{
		input.addEventListener('change', function(){checkInputValue(formInput, input);});
      	window.addEventListener('load', function(){checkInputValue(formInput, input);});
	}
  }
function checkInputValue(formInput, input) 
{
	if (input.value !== '') 
	{
      formInput.classList.add('not-empty-input');
    } else {
      formInput.classList.remove('not-empty-input');
    }
}
})();


(function alertsDismissable() {
	
	let alerts = document.querySelectorAll('.alert.alert-dismissable');
	for (let alert of alerts){
		alert.insertAdjacentHTML('beforeend','<button type="button" class="close">&times;</button>');
		let closeBtn = alert.querySelector('.close');
		
		closeBtn.addEventListener('click', function(){
			alert.className += ' alert-dismissed';
			setInterval(function(){alert.style.display = 'none';},300)
			
		})
	}
	
})();


function changeClass(newClass, elementId) {
	let el = document.getElementById(elementId);
	el.className = newClass;
}

(function tabs(){
	
	let tabs = document.querySelectorAll('.tabs');
	for(let tab of tabs){
		
		
		let menuItems = tab.querySelectorAll('.menu li a');
		let activeTab = tab.querySelector('.menu .active');
		
		if(activeTab !== null){
			
			let activeBodyItem = tab.querySelector('.body '+ activeTab.getAttribute('href'));
			activeBodyItem.classList.add('show');
		}
		
		for (let menuItem of menuItems){
			
			menuItem.addEventListener('click', function(event){
				event.preventDefault();
				
				let menuActiveItem = tab.querySelector('.menu .active');
				
				if(menuActiveItem !== null){
					
					tab.querySelector('.menu .active').classList.remove('active');
					tab.querySelector('.body > .show').classList.remove('show');
				}
				
				menuItem.classList.add('active');
				tab.querySelector(menuItem.getAttribute('href')).classList.add('show');
//		console.log();
			})
		}
		
	}
	
})();

(function navbar(){
	
	let navbarMobileMenuButtons = document.querySelectorAll('.navbar-mobile-menu-btn');
	for (let navbarMobileMenuButton of navbarMobileMenuButtons){
		navbarMobileMenuButton.addEventListener('click', function(e){
			e.preventDefault();
			
			let menu = document.querySelector(navbarMobileMenuButton.getAttribute('data-menu-id'));
//			menu.style.display = 'flex';
//			console.log(menu.classList == 'navbar-menu visible');
			if(menu.classList == 'navbar-menu visible'){
				menu.classList.remove('visible');
			}else{
				menu.classList.add('visible');
			}
			
		});
		
	}
	
	
})();
