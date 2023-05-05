/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

console.log(Vue);
const app = Vue.createApp({
    data: function() {
        return {
            firstName: 'Pinco',
            lastName: 'Pallino',
            Img: 'pd3.jpg.',
            fontSize: 50,
        }
    },
    
});

app.mount('#app');