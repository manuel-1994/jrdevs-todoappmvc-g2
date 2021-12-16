function getLoginData() {
	const email = document.getElementById('email').value
	const password = document.getElementById('password').value
	return { email = email, password = password }
}

function handleSubmit() {
	const data = getLoginData()
}

{
	document.getElementById('form-login').onsubmit = handleSubmit
}
