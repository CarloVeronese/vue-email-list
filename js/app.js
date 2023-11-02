const { createApp } = Vue;

createApp({
    data(){
        return{
            emails: []
        }
    },
    methods:{
        fillArrayNEmails(n){
            for(let i = 0; i < n; i++){
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    const newEmail = res.data.response;
                    this.emails.push(newEmail);
                })
            }
        }
    },
    beforeMount(){
        this.fillArrayNEmails(10);
    }
}).mount('#app')

// const emailDOMElement = document.querySelector('.email-list');
// const emailsList = [];
// const emailBonusDOMElement = document.querySelector('.email-list-bonus');

// for(let i = 0; i < 10; i++){
//     axios
//     .get('https://flynn.boolean.careers/exercises/api/random/mail')
//     .then((res) => {
//         newMail = res.data.response;
//         emailsList.push(newMail);
//         emailDOMElement.innerHTML += `<li>${newMail}</li>`
//         if(i == 9) insertArrayInDOM();
//     })
// }

// /* BONUS */

// function insertArrayInDOM() {
//     for(let i = 0; i < emailsList.length; i++){
//         emailBonusDOMElement.innerHTML += `<li>${emailsList[i]}</li>`
//     }
// }

