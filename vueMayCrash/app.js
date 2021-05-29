const app = Vue.createApp({
    data() {
        return {
            firstName: 'David',
            lastName: 'Shir',
            email: 'davidshir93@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
})

app.mount('#app')