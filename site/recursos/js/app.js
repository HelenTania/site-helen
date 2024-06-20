
function acessLogin(){
		
	let login =  localStorage.getItem("login")
	
	if(login === null){
		
		
	let login = document.getElementById('login').value
	let senha = document.getElementById('senha').value
	localStorage.setItem("login", login)
	localStorage.setItem("senha", senha)
	}
}
function userValidation(){
	
	let logintorage =  localStorage.getItem("login")
	
	let passwordStorage = localStorage.getItem("senha")
	
	if(loginStorage === null || passwordStorage === null){
		
		alert("realize seu cadastro")
	}
	
	
	
}
const loginInput = document.getElementById('login').value

const passwordInput = document.getElementById('senha').value

if(( loginStorage == loginInput && passwordStorage == passwordInput)&& loginStorage != '' && passwordStorage !=''){
	
	window.location.href="home.html"
	
}else{
	if(cont == 0){
		
		createElementsinId('span', 'wrongPassword', 'login ou senha errada')
	}
}

function loginModal(){
	let fade = document.querySelector('#fade')
	let modal_card = document.querySelector('#modal_card')
	
	fade.classList.toggle('hide')
	modal_card.classList.toggle('hide')
}
/*function createElementsinId(elementHTML,elementId,message){
	
	let spanWrongPassword = document.createElement()
	
}*/
