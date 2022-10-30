const app = {
    data() {
        return {
            title: 'Vue Twitter',
            item: '',
            items: [
                {
                    id: 1,
                    avatar: `https://avatars.dicebear.com/api/male/1.svg`,
                    body: 'tweet in vue3',
                    date: new Date(Date.now()).toLocaleString()
                },
                {
                    id: 2,
                    avatar: `https://avatars.dicebear.com/api/female/2.svg`,
                    body: 'another tweet',
                    date: new Date(Date.now()).toLocaleString()
                }
            ]
        }
    },
    methods: {
        sendTweet() {
            const genders = ['male', 'female']
            const gender = genders[Math.floor(Math.random() * genders.length)]
            const newTweet = {
                id: this.items.length + 1,
                avatar: `https://avatars.dicebear.com/api/${gender}/${Date.now()}.svg`,
                body: this.item,
                date: new Date(Date.now()).toLocaleString()
            }
            this.items.push(newTweet)
            this.item = ""
        }
    }
}

Vue.createApp(app).mount('#app')