const emailDOMElement = document.querySelector('.email-list');

for(let i = 0; i < 10; i++){
    axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((res) => {
        newMail = res.data.response;
        emailDOMElement.innerHTML += `<li>${newMail}</li>`
    })
}